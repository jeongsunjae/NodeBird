import React, { useCallback, useState, useEffect, useRef } from 'react';
import { Form, Input, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_POST_REQUEST, UPLOAD_IMAGES_REQUEST } from '../reducers/post';

const PostForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const { imagePaths, isAddingPost, postAdded } = useSelector(state => state.post);
  const imageInput = useRef();

  useEffect(() => {
    if (postAdded) {
      setText('');
    }
  }, [postAdded]);

  const onSubmitForm = useCallback((e) => {
    
    if (!text || !text.trim()) {
      return alert('게시글을 작성하세요.');
    }
    dispatch({
      type: ADD_POST_REQUEST,
      data: {
        content: text.trim(),
      },
    });
  }, [text]);

  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);


  const onChangeImages = useCallback((e)=> {
    console.log(e.target.files);

    const imageFormData = new FormData();

    [].forEach.call(e.target.files, (f) => {

      imageFormData.append('image', f);

    });

    dispatch({
      type: UPLOAD_IMAGES_REQUEST,
      data: imageFormData,
    })
  },[])
  const onClickImageUpload = useCallback(() => {
    
    imageInput.current.click();

  },[imageInput.current]);

  return (
    <Form style={{ margin: '10px 0 20px' }} encType="multipart/form-data" onFinish={onSubmitForm}>
      <Input.TextArea maxLength={140} placeholder="내용을 입력하세요" value={text} onChange={onChangeText} />
      <div>
        <input type="file" multiple hidden ref={imageInput} onChange={onChangeImages} />
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>
        <Button type="primary" style={{ float: 'right' }} htmlType="submit" loading={isAddingPost}>등록</Button>
      </div>
      <div>
        {imagePaths.map((v) => (
          <div key={v} style={{ display: 'inline-block' }}>
            <img src={`http://localhost:3000/${v}`} style={{ width: '200px' }} alt={v} />
            <div>
              <Button>제거</Button>
            </div>
          </div>
        ))}
      </div>
    </Form>
  );
};

export default PostForm;