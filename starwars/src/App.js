import React, { useState, useEffect } from "react";
import "./App.css";
import Text from "./components/Text";
import Content from "./components/Content";
import Loading from "./components/Loading";
import axios from "axios";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        setData(response.data.results);
        console.log(response.data.results);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {isLoading ? (
        <Loading />
      ) : (
        data.map(item => {
          return (
            <Content
              name={item.name}
              height={item.height}
              mass={item.mass}
              gender={item.gender}
              hair_color={item.hair_color}
              eye_color={item.eye_color}
              skin_color={item.skin_color}
              films={item.films}
              starships={item.starships}
              vehicles={item.vehicles}
            />
          );
        })
      )}
    </div>
  );
};

export default App;

// Try to think through what state you'll need for this app before starting. Then build out
// the state properties here.

// Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
// side effect in a component, you want to think about which state and/or props it should
// sync up with, if any.

/**
 * <Content
          name={data.name}
          height={data.height}
          mass={data.mass}
          gender={data.gender}
          hair_color={data.hair_color}
          eye_color={data.eye_color}
          skin_color={data.skin_color}
          films={data.films}
          starships={data.starships}
          vehicles={data.vehicles}
        />
 */
