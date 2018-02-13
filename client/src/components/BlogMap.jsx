import React, { Component } from "react";
import { Link } from "react-router-dom";

class BlogMap extends Component {
  render() {
    let blogList = this.props.list.map(blog => {
      return (
        <div
          className="border border-dark bg-white rounded p-5 m-3 w-75 mx-auto"
          key={blog.id}
        >
          {/* <h1>{blog.author}</h1> */}
          <img
            className="w-100"
            src="https://wallpapercave.com/wp/uhl1zmX.jpg"
            alt=""
          />
          <h2 className="text-primary">{blog.title}</h2>
          <p className="text-lg-center">{`${blog.content.substring(0, 150)}...`}</p>
          <p className="text-sm-right text-muted">{blog._created}</p>
          <Link className="btn btn-outline-primary w-100" to={`/${blog.id}`}>
            Read More
          </Link>
        </div>
      );
    });
    return <div>{blogList}</div>;
  }
}

export default BlogMap;
