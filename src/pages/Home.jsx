import React, { useState } from "react";
import ActorGrid from "../components/actor/ActorGrid";
import MainPageLayout from "../components/MainPageLayout";
import ShowGrid from "../components/show/ShowGrid";
import { apiGet } from "../misc/config";

const Home = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState(null);
  const [searchOption, setSearchOption] = useState("shows");
  const isShowsSearch = searchOption === "shows";

  const onInputChange = (ev) => {
    setInput(ev.target.value);
  };

  const onSearch = () => {
    apiGet(`/search/${searchOption}?q=${input}`).then((result) => {
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
    }
    if (results && results.length > 0) {
      return results[0].show ? (
        <ShowGrid data={results} />
      ) : (
        <ActorGrid data={results} />
      );
    }
    return null;
  };

  const onRadioChange = (ev) => {
    setSearchOption(ev.target.value);
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        placeholder="Search for Something"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />

      <div>
        <label htmlFor="shows search">
          Shows
          <input
            id="shows search"
            type="radio"
            value="shows"
            checked={isShowsSearch}
            onChange={onRadioChange}
          />
        </label>
        <label htmlFor="actors search">
          Actors
          <input
            id="actors search"
            type="radio"
            value="people"
            checked={!isShowsSearch}
            onChange={onRadioChange}
          />
        </label>
      </div>

      <input type="button" onClick={onSearch} value="Search" />
      {rendorResults()}
    </MainPageLayout>
  );
};

export default Home;
