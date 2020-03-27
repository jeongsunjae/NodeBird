import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import PropTypes  from 'prop-types';
import withRedex from 'next-redux-wrapper';
import reducer from '../reducers';
import {Provider} from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux';

const NodeBird = ({Component, store}) => {

    return (
        <Provider store={store}>
            <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.0.4/antd.css" />
            </Head>
            <AppLayout>
                <Component />
            </AppLayout>
        </Provider>
    )
};

NodeBird.propTypes = {
    Component: PropTypes.elementType,
    store: PropTypes.object,
}

//redux를 사용하기 위해 store를 사용해야하는데 그 store를 만들어주는 부분
export default withRedex((initialState, options)=>{
    const middlewares = [];
    const enhancer = compose(
        applyMiddleware(...middlewares),
        !options.isServer && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
      );

    const store = createStore(reducer,initialState,enhancer);
    return store;
})(NodeBird);