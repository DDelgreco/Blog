import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SingleBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Blog: {}
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
      <div className="border p-3 m-1 w-75 mx-auto" key={blog.id}>
        <h1>{blog.title}</h1>
        <p>{blog.content}</p>
        <p>{blog._created}</p>
        <Link className="btn btn-primary" to={`/`}>
          Back to List
        </Link>
      </div>
    );
  }
}
