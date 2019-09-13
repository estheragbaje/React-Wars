import React from "react";
import styled from "styled-components";
import Text from "./Text";

function Content(props) {
  const {
    name,
    height,
    mass,
    gender,
    hair_color,
    skin_color,
    eye_color,
    films,
    starships,
    vehicles,
    ...rest
  } = props;

  return (
    <>
      <Text size="big">{name}</Text>
      <hr />
      <div>
        <div>
          <Text>{height}</Text>
          <Text>{mass}</Text>
          <Text>{gender}</Text>
        </div>
        <div>
          <Text>{hair_color}</Text>
          <Text>{eye_color}</Text>
          <Text>{skin_color}</Text>
        </div>
      </div>
      <div>
        <ul>
          {films.map(film => (
            <li>{film}</li>
          ))}
        </ul>
        <ul>
          {starships.map(starship => (
            <li>{starship}</li>
          ))}
        </ul>
        <ul>
          {vehicles.map(vehicle => (
            <li>{vehicle}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Content;
