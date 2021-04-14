import React from "react";
import "./BlogCards.css";
const BlogCards = ({ blog }) => {
  return (
    <div className="col-md-4 {blog-${blog.background}} mt-3 blog-container">
      <div className="row text-center mt-5">
        <div className="col-md-6">
          <img style={{ width: "50px" }} src={blog.image} alt="" />
        </div>
        <div className="col-md-6 text-center">
          <h6>{blog.name}</h6>
          <small>{blog.date}</small>
        </div>
      </div>
      <h5 className="mt-5 mb-4">{blog.title}</h5>
      <small>{blog.description}</small>
    </div>
  );
};

export default BlogCards;
