import React from 'react';


function Post({ title, body, time, onEdit, onDelete }) {
  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{body}</p>
      <p className="time">{time}</p>
      <div className="actions">
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}

export default Post;
