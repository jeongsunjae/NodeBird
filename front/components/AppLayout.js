import React, { useEffect } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Col, Input, Menu, Row } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import LoginForm from '../container/LoginForm';
import UserProfile from '../container/UserProfile';
import { LOAD_USER_REQUEST } from '../reducers/user';
import Router from 'next/router';

const AppLayout = ({ children }) => {
  const { me } = useSelector(state => state.user);

  const onSearch = (value) => {
                    // 내부적인 주소                          // 보여지는 주소
    Router.push({ pathname: '/hashtag', query:{tag:value}},`/hashtag/${value}`);

  };

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home"><Link href="/"><a>노드버드</a></Link></Menu.Item>
        <Menu.Item key="profile"><Link href="/profile"><a>프로필</a></Link></Menu.Item>
        <Menu.Item key="mail">
          <Input.Search 
            enterButton 
            style={{ verticalAlign: 'middle' }}
            onSearch={onSearch}
          />
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {me
            ? <UserProfile />
            : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node,
};

export default AppLayout;