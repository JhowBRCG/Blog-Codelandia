import "./styles/globalStyles.scss";
import Header from "./components/Header";
import NewsList from "./components/NewsList";
import { useState } from "react";

const App = () => {
  const [search, setSearch] = useState("dc");

  return (
    <>
      <Header setSearch={setSearch} />
      <NewsList search={search} />
    </>
  );
};

export default App;
