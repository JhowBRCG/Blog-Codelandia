import "./index.scss";
import { motion } from "framer-motion";
import { useState } from "react";

const variants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, duration: 0.5 },
  },
};

const Header = ({ setSearch }) => {
  const [tempSearch, setTempSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!tempSearch) return;
    setSearch(tempSearch);
    setTempSearch("");
  };

  const handleSearchChange = (e) => {
    setTempSearch(e.target.value);
  };

  return (
    <header className="header">
      <motion.div
        variants={variants}
        initial={"hidden"}
        animate={"visible"}
        className="header__content container"
      >
        <div className="header__texts">
          <h3 className="header__logo">Codelândia</h3>
          <p className="header__blog">blog</p>
        </div>
        <div className="header-input__container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="header__input"
              placeholder="Pesquisar no blog"
              onChange={handleSearchChange}
              value={tempSearch}
            />
          </form>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
