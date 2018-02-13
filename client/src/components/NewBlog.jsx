import React, { Component } from "react";

class NewBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.handleNewMention(this.state.content);
  }
  handleChange(value) {
    this.setState({ content: value });
  }

  render() {
    return (
      <div className="w-75 border mx-auto m-5 p-4 bg-white">
        <form
          onSubmit={e => this.handleSubmit(e)}
          className="mx-auto m-2"
        >
          Blog it Out!: <br />
          <input
            className="m-2 w-100 p-2"
            type="text"
            placeholder="Whats on your mind, Adam Devine?"
            value={this.state.content}
            onChange={event => this.handleChange(event.target.value)}
          />
          <br />
          <input
            type="submit"
            value="Share"
            className="btn-outline-primary w-100 rounded"
          />
        </form>
      </div>
    );
  }
}
export default NewBlog;
