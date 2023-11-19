import "./index.scss";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { useState } from "react";

const NewsCard = ({ data }) => {
  const [isFav, setFav] = useState(false);
  const handleClick = () => setFav((prevFav) => !prevFav);

  const transformedDate = () => {
    const monthAbbreviations = {
      "01": "jan",
      "02": "fev",
      "03": "mar",
      "04": "abr",
      "05": "mai",
      "06": "jun",
      "07": "jul",
      "08": "ago",
      "09": "set",
      "10": "out",
      "11": "nov",
      "12": "dez",
    };

    const day = data.publishedAt.slice(8, 10);
    const month = monthAbbreviations[data.publishedAt.slice(5, 7)];
    const year = data.publishedAt.slice(0, 4);

    return `${day} de ${month}, ${year}`;
  };

  return (
    <article className="card">
      <div className="card__header">
        <p className="card-header__date">{transformedDate()}</p>
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
