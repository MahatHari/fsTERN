import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import PostDisplay from './PostDisplay';
import { POST_TYPE } from './store/PostReducer';
import { USER_TYPE } from './store/userReducer';
import UserDisplay from './UserDisplay';

function App() {
  const [userid, setUserid] = useState(0);
  const dispatch = useDispatch();
  const [postid, setPostId] = useState(0);
  const onChangeUserid = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const useridFromInput = e.target.value ? Number(e.target.value) : 0;
    console.log('userId', useridFromInput);
    setUserid(useridFromInput);

    const usersResponse = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    );
    console.log('Response', usersResponse);
    if (usersResponse.ok) {
      const users = await usersResponse.json();
      console.log('users', users);
      const usr = users.find((userItem: any) => {
        return userItem && userItem.id === useridFromInput;
      });
      if (usr) {
        dispatch({
          type: USER_TYPE,
          payload: {
            id: usr.id,
            username: usr.username,
            email: usr.email,
            city: usr.address.city,
          },
        });
      }
    }
  };
  const onChangePostId = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const postIdFromInput = e.target.value ? Number(Number(e.target.value)) : 0;
    setPostId(postIdFromInput);

    const postResponse = await fetch(
      'https://jsonplaceholder.typicode.com/posts/' + postIdFromInput
    );
    if (postResponse.ok) {
      const post = await postResponse.json();
      console.log('Post', post);
      dispatch({
        type: POST_TYPE,
        payload: {
          id: post.id,
          title: post.title,
          body: post.body,
        },
      });
    }
  };

  return (
    <div className='App' style={{ width: '300px', margin: '20px auto' }}>
      <label htmlFor=''> user id</label>
      <input type='text' value={userid} onChange={onChangeUserid} />

      <UserDisplay />
      <div style={{ width: '300px', backgroundColor: '#ff3' }}></div>
      <label htmlFor=''>postId:</label>
      <input type='text' value={postid} onChange={onChangePostId} />
      <PostDisplay />
    </div>
  );
}

export default App;
