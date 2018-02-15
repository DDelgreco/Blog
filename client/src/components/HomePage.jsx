import React, { Component } from "react";
import BlogMap from "./BlogMap";
import NewBlog from "./NewBlog";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogArray: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/api/blogs")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ blogArray: data });
      });
  }
  render() {
    return (
      <div className="container bg-">
        <div>
          <div className="jumbotron jumbotron-fluid">
            <img
              className="card-img w-100"
              src=""
              alt=""
            />
            <div className="card-img-overlay">
              <h1 className="text-center display-2">
                I'll Play Myself Out
              </h1>
            </div>
          </div>
        </div>
        <NewBlog handleNewBlog={content=> this.handleNewBlog(content)} />
        <BlogMap list={this.state.blogArray} />
      </div>
    );
  }
}

export default HomePage;
