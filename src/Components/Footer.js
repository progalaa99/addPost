import React from 'react';
import { Link } from 'react-router-dom';
// import './footer.css'; 

function Footer() {
  return (
    <footer>
      <div>
        
        <Link to="/">Home</Link>
        <Link to="/add-posts">Add Posts</Link>
      </div>
      <div>
      <div className="logo">React</div>
      </div>
    </footer>
  );
}

export default Footer;
