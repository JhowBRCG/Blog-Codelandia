import "./index.scss";
import NewsCard from "../NewsCard";
import SpinnerLoading from "../SpinnerLoading";
import LoadMoreButton from "../LoadMoreButton";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, duration: 0.5 } },
};

const item = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { duration: 0.5 } },
};

const getNews = async (query, limit) => {
  const apiKey = "pub_33242fbc060fecedbe3e8986f78e0921a2404";
  const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&qInMeta=${query}&size=${limit}&language=en,pt`;
  const response = await fetch(url);
  return await response.json();
};

const NewsList = ({ search }) => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [limit, setLimit] = useState(3);

  const fetchNews = async (query) => {
    setIsLoading(true);
    const data = await getNews(query, limit);
    const articles = data.results;
    setNews(articles);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchNews(search);
  }, [search, limit]);

  return (
    <main>
      <section className="container">
        {news.length > 0 && (
          <motion.ul
            key={search}
            variants={variants}
            initial={"hidden"}
            animate={"visible"}
          >
            {news.map((data) => (
              <motion.li variants={item} key={data.article_id}>
                <NewsCard data={data} />
              </motion.li>
            ))}
          </motion.ul>
        )}
        {!isLoading && news.length === 0 && (
          <motion.p
            variants={item}
            initial={"hidden"}
            animate={"visible"}
            className="not-found"
          >
            Notícia não encontrada
          </motion.p>
        )}
        {news.length > 0 && news.length < 9 && (
          <LoadMoreButton setLimit={setLimit} />
        )}
        {isLoading && <SpinnerLoading />}
      </section>
    </main>
  );
};

export default NewsList;
