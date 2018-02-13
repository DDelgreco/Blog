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
          <div className="card card-inverse">
            <img
              className="card-img w-100"
              src="https://www.ukfestivalguides.com/content/img/crowd_bkg_long_black.jpg"
              alt=""
            />
            <div className="card-img-overlay">
              <h1 className="d-block text-white text-center display-3">
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
