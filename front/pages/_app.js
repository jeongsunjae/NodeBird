import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import PropTypes  from 'prop-types';
import withRedex from 'next-redux-wrapper';
import reducer from '../reducers';
import {Provider} from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';


const NodeBird = ({Component, store, pageProps}) => {

    return (
        <Provider store={store}>
            <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.0.4/antd.css" />
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
    sagaMiddleware.run(rootSaga);
    return store;
}

//redux를 사용하기 위해 store를 사용해야하는데 그 store를 만들어주는 부분
export default withRedex(configureStore)(NodeBird);