import React from 'react' // 'Next는 따로 import해주지 않아도 되지만 구조상 사용함'
import Link from 'next/link';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';

const Home = () => {
    return (
        <>
        <Head>
            <title>NodeBird</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.0.4/antd.css" />
        </Head>
            <AppLayout>
                <div>Hello Next.js!</div>
            </AppLayout>
        </>
    );
};

export default Home;