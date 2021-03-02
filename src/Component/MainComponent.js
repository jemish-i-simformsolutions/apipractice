import React, { useEffect } from "react";
import axios from "axios";
export class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      // name:'',
      id: 0,
    };
  }
  change = (event) => {
    this.setState({ id: Number(event.target.value) });
  };
  submit = (event) => {
    event.preventDefault();
    //    const user={name:this.state.name};
    // axios.post(`https://jsonplaceholder.typicode.com/users`,user).then((res)=>{console.log(res.data);})
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      this.setState({ data: res.data });
    });
  }

  render() {
    return (
      <>
        <ul>
          {console.log(this.state.data)}
          {this.state.data.map((val, index) => {
            return <li key={index}>{val.name}</li>;
          })}
        </ul>
        <form onSubmit={this.submit}>
          <label>
            Id <input type="text" name="id" onChange={this.change} />
            {console.log(this.state.data)}
          </label>
          <button type="submit">submit</button>
        </form>
      </>
    );
  }
}
