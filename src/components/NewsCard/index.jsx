import "./index.scss";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { useState } from "react";

const NewsCard = ({ data }) => {
  const [isFav, setFav] = useState(false);
  const handleClick = () => setFav((prevFav) => !prevFav);

  return (
    <article className="card">
      <div className="card__header">
        <p className="card-header__date">{data.publishedAt.slice(0, 10)}</p>
        <button onClick={handleClick}>
          {isFav ? <FaHeart size={25} /> : <FaRegHeart size={25} />}
        </button>
      </div>
      <h4 className="card__title">{data.title}</h4>
      <p className="card__description">{data.description}</p>
    </article>
  );
};

export default NewsCard;
