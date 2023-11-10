import React from 'react';
import Post from './Post';

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      {/* Display three example posts */}
      <Post
        title="Post 1"
        body="This is the body of the first post. Lorem ipsum dolor sit amet."
        time="2023-11-10 12:00 PM"
        onEdit={() => console.log('Edit post 1')}
        onDelete={() => console.log('Delete post 1')}
      />

      <Post
        title="Post 2"
        body="This is the body of the second post. Lorem ipsum dolor sit amet."
        time="2023-11-10 1:30 PM"
        onEdit={() => console.log('Edit post 2')}
        onDelete={() => console.log('Delete post 2')}
      />

      <Post
        title="Post 3"
        body="This is the body of the third post. Lorem ipsum dolor sit amet."
        time="2023-11-10 3:45 PM"
        onEdit={() => console.log('Edit post 3')}
        onDelete={() => console.log('Delete post 3')}
      />
    </div>
  );
}

export default Home;
