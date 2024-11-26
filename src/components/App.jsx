import { useState } from "react";
import data from "../post.json";
import Paginator from "./Paginator/Paginator";
import Post from "./Post/Post";
import Container from "./Container/Container";
import LoginForm from "./LoginForm/LoginForm";

const App = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  const [currentPost, setCurrentPost] = useState(1);

  const numberOfPosts = data.length;

  const post = data[currentPost - 1];

  const handlePrev = () => {
    if (currentPost === 1) return;
    setCurrentPost(currentPost - 1);
  };

  const handleNext = () => {
    if (currentPost === data.length) return;
    setCurrentPost(currentPost + 1);
  };

  const handleLogin = (username, password) => {
    if (username === "user" && password === "password") {
      setIsAuthorized(true);
    } else {
      alert("Invalid credentials. Try 'user' and 'password' ");
    }
  };

  return (
    <>
      {!isAuthorized ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <>
          <Container>
            <Paginator
              numberOfPosts={numberOfPosts}
              handlePrev={handlePrev}
              handleNext={handleNext}
              currentPost={currentPost}
            />
          </Container>

          <hr />
          <hr />
          <Post post={post} currentPost={currentPost} />
        </>
      )}
    </>
  );
};

export default App;
