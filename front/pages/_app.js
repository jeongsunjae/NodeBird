import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import PropTypes  from 'prop-types';
import withRedex from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import reducer from '../reducers';
import {Provider} from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import { LOAD_USER_REQUEST } from '../reducers/user';
import axios from 'axios';

const NodeBird = ({Component, store, pageProps}) => {

    return (
        <Provider store={store}>
            <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.0.4/antd.css" />
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            </Head>
            <AppLayout>
                <Component {...pageProps} />
            </AppLayout>
        </Provider>
    )
};

NodeBird.propTypes = {
    Component: PropTypes.elementType.isRequired,
    store: PropTypes.object.isRequired,
    pageProps: PropTypes.object.isRequired,
};

//getInitialProps를 사용할 수 있게 하는 사전 작업
NodeBird.getInitialProps = async (context) => {

    const { ctx, Component } = context;
    console.log(ctx);
    let pageProps = {};

    const cookie = ctx.isServer ? ctx.req.headers.cookie : '';

    if(ctx.isServer && cookie)
    {
      axios.defaults.headers.Cookie = cookie;
    }
    
    const state = ctx.store.getState();
    if(!state.user.me){
      ctx.store.dispatch({
        type: LOAD_USER_REQUEST,
      });
    }

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    //컴포넌트의 프롭스
    return { pageProps };
  };

const configureStore = (initialState, options)=>{
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];
    const enhancer = process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(...middlewares))
      : compose(
        applyMiddleware(...middlewares),
        !options.isServer && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
      );
    const store = createStore(reducer,initialState,enhancer);
    //withReduxSaga할 때 필요
    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
}

//redux를 사용하기 위해 store를 사용해야하는데 그 store를 만들어주는 부분
export default withRedex(configureStore)(withReduxSaga(NodeBird));