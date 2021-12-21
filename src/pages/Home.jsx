import React, { useState } from "react";
import MainPageLayout from "../components/MainPageLayout";
import { apiGet } from "../misc/config";

const Home = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState(null);

  const onInputChange = (ev) => {
    setInput(ev.target.value);
  };

  const onSearch = () => {
    apiGet(`/search/shows?q=${input}`).then((result) => {
      setResults(result);
    });
  };
  const onKeyDown = (ev) => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };

  const rendorResults = () => {
    if (results && results.length === 0) {
      return <div>No result found</div>;
    } else if (results && results.length > 0) {
      return (
        <div>
          {results.map((item) => (
            <div key={item.show.id}>{item.show.name}</div>
          ))}
        </div>
      );
    }
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      <input type="button" onClick={onSearch} value="Search" />
      {rendorResults()}
    </MainPageLayout>
  );
};

export default Home;
