import React, { useCallback, useEffect, useState } from 'react';
import { Avatar, Button, Card, Comment, Form, Icon, Input, List } from 'antd';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_COMMENT_REQUEST, LOAD_COMMENTS_REQUEST, UNLIKE_POST_REQUEST, LIKE_POST_REQUEST } from '../reducers/post';
import {TwitterOutlined,LikeOutlined,MailOutlined,EllipsisOutlined } from '@ant-design/icons';
import PostImages from './PostImages';

const PostCard = ({ post }) => {

  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const [commentText, setCommentText] = useState('');
  const {me} = useSelector(state => state.user);
  const { commentAdded, isAddingComment } = useSelector(state => state.post);
  const dispatch = useDispatch();

  const liked = me && post.Likers && post.Likers.find(v => v.id === me.id);

  const onToggleComment = useCallback(() => {
    setCommentFormOpened(prev => !prev);
    if (!commentFormOpened) {
      dispatch({
        type: LOAD_COMMENTS_REQUEST,
        data: post.id,
      });
    }
  }, []);

  const onSubmitComment = useCallback((e) => {
    //e.preventDefault();
    if (!me) {
      return alert('로그인이 필요합니다.');
    }
    return dispatch({
      type: ADD_COMMENT_REQUEST,
      data: {
        postId: post.id,
        content: commentText,
      },
    });
  }, [me && me.id, commentText]);

  useEffect(() => {
    setCommentText('');
  }, [commentAdded === true]);

  const onChangeCommentText = useCallback((e) => {
    setCommentText(e.target.value);
  }, []);
  
  const onToggleLike = useCallback(() => {
    if(!me)
    {
      return alert('로그인 필요');
    }

    if(liked)
    {
      dispatch({
        type: UNLIKE_POST_REQUEST,
        data: post.id,
      });
    }else 
    {
        dispatch({
          type: LIKE_POST_REQUEST,
          data: post.id
        });
    }
  }, [me &&  me.id , post && post.id, liked]);
  return (
    <div>
    <Card
      key={+post.createdAt}
      cover={post.Images  && post.Images[0] && <PostImages images={post.Images} />}
      actions={[
        <TwitterOutlined />,
        <LikeOutlined theme={(liked ? "twoTone" : "outlined")} twoToneColor="#eb2f96" onClick={onToggleLike}/>,
        <MailOutlined onClick={onToggleComment}/>,
        <EllipsisOutlined />,
      ]}
      extra={<Button>팔로우</Button>}
    >
      <Card.Meta
        avatar={(
        <Link href={{pathname: '/user', query: {id: post.User.id}}} as={`/user/${post.User.id}`}>
          <a><Avatar>{post.User.nickname[0]}</Avatar></a></Link>
        )}
        title={post.User.nickname}
        description={(
          <div>
            {post.content.split(/(#[^\s]+)/g).map((v)=> {
            if(v.match(/#[^\s]+/)) {
              return (
                <Link href={{pathname: '/hashtag', query:{tag: v.slice(1)}}} as={`/hashtag/${v.slice(1)}`}  key={v}><a>{v}</a></Link>
              );
            }
            return v;
          })}
          </div>
        )}
      />
    </Card>
    {commentFormOpened && (
        <>
          <Form onFinish={onSubmitComment}>
            <Form.Item>
              <Input.TextArea rows={4} value={commentText} onChange={onChangeCommentText} />
            </Form.Item>
            <Button type="primary" htmlType="submit" loading={isAddingComment}>버튼</Button>
          </Form>
          <List
            header={`${post.Comments ? post.Comments.length : 0} 댓글`}
            itemLayout="horizontal"
            dataSource={post.Comments || []}
            renderItem={item => (
              <li>
                <Comment
                  author={item.User.nickname}
                  avatar={<Link href={{pathname: '/user', query: {id: item.User.id}}} as={`user/${item.User.id}`}>
                    
                    <a><Avatar>{item.User.nickname[0]}</Avatar></a></Link>}
                  content={item.content}
                />
              </li>
            )}
          />
        </>
      )}
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    User: PropTypes.object,
    content: PropTypes.string,
    img: PropTypes.string,
    createdAt: PropTypes.object,
  }),
};

export default PostCard;