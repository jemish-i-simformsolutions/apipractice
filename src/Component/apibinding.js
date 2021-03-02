import axios from "axios";
import React from "react";

class ApiBinding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => this.setState({ posts: data }));
  }
  delete = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/11", {
      method: "delete",
      headers: {
        "Content-type": "application/json; charset=UTF-8", // Indicates the content
      },
      //   body: JSON.stringify({
      //     userId: 2,
      //     id: 11,
      //     title: "instagram",
      //     body: "happy happy",
      //   }),
    })
      .then((res) => 
        console.log(res))
      .catch((err) => console.log(err));
  };
  handleSubmit = (event) => {
    event.preventDefault();

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        userId: 196,
        id: 34,
        title: "instagram",
        body: "happy happy",
      }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })

      .then((result) => {
        this.setState({ posts: [...this.state.posts, result] });
        console.log("Success:", result);
      })
      .catch((err) => console.log(err));
  };
  
  render() {
    return (
      <>
        <form id="form" onSubmit={this.handleSubmit}>
          <input type="number" id="uid" name="uid" />
          <br />
          <input type="number" id="id" name="id" />
          <br />
          <input type="text" id="text" name="text" />
          <br />
          <button type="submit">submit</button>
          {/* {console.log(this.state.posts)} */}
        </form>
        <button onClick={this.delete}>click to delete</button>
      </>
    );
  }
}
export default ApiBinding;
