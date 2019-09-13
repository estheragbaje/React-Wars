import React, { useState, useEffect } from "react";
import "./App.css";
import Text from "./components/Text"
import Content from "./components/Content"
import Loading from "./components/Loading"


const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(response => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {
        isLoading 
        ?  <Loading />
        : (
            <Content
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
          );
      }
    </div>
  );
};

export default App;

// Try to think through what state you'll need for this app before starting. Then build out
// the state properties here.

// Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
// side effect in a component, you want to think about which state and/or props it should
// sync up with, if any.
