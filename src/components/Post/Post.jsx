const Post = ({ currentPost, post }) => {
  return (
    <>
      <h1>Post #{currentPost}</h1>
      <hr />
      <h2>Title: {post.title}</h2>
      <p>{post.body}</p>
      <hr />
    </>
  );
};

export default Post;
