import css from "./Paginator.module.css";

const Paginator = ({ handlePrev, currentPost, numberOfPosts, handleNext }) => {
  return (
    <>
      <button onClick={handlePrev} className={css.buttonPaginator}>
        Prev
      </button>
      <p>
        {currentPost}/ {numberOfPosts}
      </p>
      <button onClick={handleNext} className={css.buttonPaginator}>
        Next
      </button>
    </>
  );
};

export default Paginator;
