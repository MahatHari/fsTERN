import React, { useRef } from 'react';

import { useSelector } from 'react-redux';
import { AppState } from './store/AppState';

const PostDisplay = React.memo(() => {
  const renderCount = useRef(0);
  console.log('renders PostDisplay', renderCount.current++);
  const post = useSelector((state: AppState) => state.post);
  if (post) {
    return (
      <>
        <div>
          <label htmlFor=''> title:</label>
          &nbsp; {post.title}
        </div>
        <div>
          <label htmlFor=''> body:</label>
          &nbsp; {post.body}
        </div>
      </>
    );
  } else {
    return null;
  }
});

export default PostDisplay;
