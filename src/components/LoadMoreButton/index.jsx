import "./index.scss";

const LoadMoreButton = ({ setLimit }) => {
  const handleClick = () => {
    setLimit((prevLimit) => prevLimit + 10);
  };

  return (
    <button className="load-more" onClick={handleClick}>
      Carregar mais
    </button>
  );
};

export default LoadMoreButton;
