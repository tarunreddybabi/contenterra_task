import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./component/card";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://www.reddit.com/r/reactjs.json")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.data.children);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="app">
      <h1>Reddit ReactJS Posts</h1>
      <div>
        {posts.map((post, index) => (
          <div key={index}>
            <Card
              title={post.data.title}
              post={post.data.selftext_html}
              url={post.data.url}
              score={post.data.score}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
