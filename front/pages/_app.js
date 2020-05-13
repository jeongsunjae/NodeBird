import React from 'react';
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
import {Helmet} from 'react-helmet';
import {Container} from 'next/app';


const NodeBird = ({Component, store, pageProps}) => {

    return (
      <Container>
        <Provider store={store}>
          <Helmet
          title="NodeBird"
          htmlAttributes={{ lang: 'ko' }}
          meta={[{
            charset: 'UTF-8',
          }, {
            name: 'viewport',
            content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=yes,viewport-fit=cover',
          }, {
            'http-equiv': 'X-UA-Compatible', content: 'IE=edge',
          }, {
            name: 'description', content: ' NodeBird SNS',
          }, {
            name: 'og:title', content: 'NodeBird',
          }, {
            name: 'og:description', content: 'NodeBird SNS',
          }, {
            property: 'og:type', content: 'website',
          },{
            property: 'og:image', content: 'http://localhost:3060/favicon.ico'
          }]}
          link={[{
            rel: 'shortcut icon', href: '/favicon.ico',
          }, {
            rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css',
          }, {
            rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css',
          }, {
            rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css',
          }]}
        />
            <AppLayout>
                <Component {...pageProps} />
            </AppLayout>
        </Provider>
      </Container>
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
      pageProps = await Component.getInitialProps(ctx) || {};
    }

    //컴포넌트의 프롭스
    return { pageProps };
  };

const configureStore = (initialState, options)=>{
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware, (store)=>(next)=>(action)=> {
      console.log(action);
      next(action);
    }];
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