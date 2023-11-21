import "./index.scss";

const LoadMoreButton = ({ setLimit }) => {
  const handleClick = () => {
    setLimit((prevLimit) => prevLimit + 3);
  };

  return (
    <button className="load-more" onClick={handleClick}>
      Carregar mais
    </button>
  );
};

export default LoadMoreButton;
