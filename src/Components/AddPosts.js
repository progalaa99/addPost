import React, { useState, useEffect } from 'react';

function AddPosts() {
  // State to hold form data
  const [post, setPost] = useState({
    title: '',
    body: '',
  });

  // State to hold all posts
  const [posts, setPosts] = useState([]);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new post object
    const newPost = {
      title: post.title,
      body: post.body,
    };

    // Update the state to include the new post
    setPosts((prevPosts) => [...prevPosts, newPost]);

    // Clear the form fields
    setPost({ title: '', body: '' });
  };

  // Function to handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  // Effect to load posts from localStorage on component mount
  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(storedPosts);
  }, []); // Run only on component mount

  // Effect to save posts to localStorage whenever posts change
  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  return (
    <div>
      <h1>Add Posts Page</h1>
      {/* Display existing posts */}
      {posts.length > 0 && (
        <div>
          <h2>Existing Posts:</h2>
          <ul>
            {posts.map((p, index) => (
              <li key={index}>
                <strong>{p.title}</strong>: {p.body}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Add your add posts page content here */}
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type='text'
            name='title'
            value={post.title}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Body:
          <input
            type='text'
            name='body'
            value={post.body}
            onChange={handleInputChange}
            required
          />
        </label>

        <input type='submit' value='Submit' />
      </form>
    </div>
  );
}

export default AddPosts;
