import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SingleBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blog: {}
    };
  }
  componentDidMount() {
    fetch(`http://localhost:3000/api/blogs/${this.props.match.params.id}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ blog: data });
      });
  }
  render() {
    let blog = this.state.blog;
    return (
      <div className="border border-dark bg-white rounded p-5 m-3 w-75 mx-auto" key={blog.id}>
      <img
            className="w-50 h-50 "
            src="https://wallpapercave.com/wp/uhl1zmX.jpg"
            alt=""
          />
        <h1>{blog.title}</h1>
        <p>{blog.content}</p>
        <p className="text-right text-muted" >{blog._created}</p>
        <Link className="btn btn-outline-primary w-100" to={`/`}>
          Back to Blog Posts
        </Link>
      </div>
    );
  }
}
