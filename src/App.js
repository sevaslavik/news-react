import React from 'react';
import './App.css';
import Post from "./components/Post";
import Form from "./components/Form";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      id: "id",
      userId: "userId",
      title: "title",
      text: "text"
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

    const data = event.target;
    let post = {
      id: data.id.value,
      userId: data.userId.value,
      title: data.title.value,
      body: data.text.value
    }


    data.id.value = "";
    data.userId.value = "";
    data.title.value = "";
    data.text.value = "";

    this.setState({ posts: [...this.state.posts, post] });
  }

  render() {
    const { posts, id, userId, title, text } = this.state;

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
          <Form
            onSubmit={this.handleSubmit}
            id={id}
            userId={userId}
            title={title}
            text={text}
          />
        </div>
      </>
    );
  }
}

export default App;
