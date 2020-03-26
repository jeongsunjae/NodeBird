import React from 'react';
import { Button, List, Card } from 'antd';
import NicknameEditForm from '../components/NicknameEditForm';
import {StopOutlined } from '@ant-design/icons';

const Profile = () => {
  return (
    <div>
      <NicknameEditForm />
      <List
        style={{ marginBottom: '20px' }}
        grid={{ gutter: 4, xs: 2, md: 3 }}
        size="small"
        header={<div>팔로잉 목록</div>}
        loadMore={<Button style={{ width: '100%' }}>더 보기</Button>}
        bordered
        dataSource={['정선재', 'ㅎㅎ', '노드버드오피셜']}
        renderItem={item => (
          <List.Item style={{ marginTop: '20px' }}>
            <Card actions={[<StopOutlined />]}><Card.Meta description={item} /></Card>
          </List.Item>
        )}
      />
      <List
        style={{ marginBottom: '20px' }}
        grid={{ gutter: 4, xs: 2, md: 3 }}
        size="small"
        header={<div>팔로워 목록</div>}
        loadMore={<Button style={{ width: '100%' }}>더 보기</Button>}
        bordered
        dataSource={['ㅎㅎ', '정선재', '노드버드오피셜']}
        renderItem={item => (
          <List.Item style={{ marginTop: '20px' }}>
            <Card actions={[<StopOutlined />]}><Card.Meta description={item} /></Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Profile;