import React from "react";
import BlogCards from "../BlogCards/BlogCards";
import winson1 from "../../../images/Ellipse 1.png";
import winson2 from "../../../images/Ellipse 2.png";

const Blog = () => {
  const blogs = [
    {
      image: "",
      date: "23 April 2021",
      name: "Dr.Jack Chen",
      title: "2 times of Brush in a day  can keep you healthy",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad id recusandae perspiciatis natus fugit reprehenderit deleniti qui asperiores sed sit? ",
      background: "green",
    },
    {
      image: winson2,
      date: "23 April 2021",
      name: "Dr.Jack Chen",
      title: "2 times of Brush in a day  can keep you healthy",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad id recusandae perspiciatis natus fugit reprehenderit deleniti qui asperiores sed sit? ",
      background: "dark",
    },
    {
      image: winson1,
      date: "23 April 2021",
      name: "Dr.Jack Chen",
      title: "2 times of Brush in a day  can keep you healthy",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad id recusandae perspiciatis natus fugit reprehenderit deleniti qui asperiores sed sit? ",
      background: "red",
    },
  ];
  return (
    <div className="mt-5 pt-5">
      <div className="text-center">
        <h6 className="mt-5">OUR BLOG</h6>
        <h2 className="mt-2">From Our Blog News</h2>
      </div>
      <div className="row mt-5 pt-5 -flex justify-content-evenly   align-items-center">
        {blogs.map((blog) => (
          <BlogCards blog={blog}></BlogCards>
        ))}
      </div>
    </div>
  );
};

export default Blog;
