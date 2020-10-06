import React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from "./components/Post";
import Form from "./components/Form";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        this.setState({ posts: json })
        console.log(this.posts)
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(event.target["0"].value)
    let post = {
      id: event.target["0"].value,
      userId: event.target["1"].value,
      title: event.target["2"].value,
      body: event.target["3"].value
    }

    event.target["0"].value = "";
    event.target["1"].value = "";
    event.target["2"].value = "";
    event.target["3"].value = "";

    console.log(post);
    this.setState({ posts: [...this.state.posts, post] });
  }

  render() {
    const { posts } = this.state;
    return (
      <>
        <div className="grid" id="article">
          {
            posts.map((post, index) => {
              return (
                <Post
                  key={index + Date.now()}
                  id={post.id}
                  userID={post.userId}
                  title={post.title}
                  text={post.body}
                />
              )
            })
          }
        </div>
        <div className="grid">
          <Form onSubmit={this.handleSubmit} />
        </div>
      </>
    );
  }
}

export default App;
