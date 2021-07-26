import React, { useState, useEffect } from "react";
import ResultCont from "../ResultsCont/resultCont";
import Welcome from "./welcome.js";
import "./movieList.css";

const MovieList = (props) => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const welcomeHandler = () => {
      if (props.results === undefined || props.results.length === 0) {
        setShowWelcome(true);
      } else {
        setShowWelcome(false);
      }
    };
    welcomeHandler();
  }, [props.results]);

  return (
    <div className="listCont">
      {showWelcome && <Welcome />}
      {props.results !== undefined
        ? props.results.map((result, key) => {
            return <ResultCont result={result} key={key} {...props} />;
          })
        : undefined}
    </div>
  );
};

export default MovieList;
