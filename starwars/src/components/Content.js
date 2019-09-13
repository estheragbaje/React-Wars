import React from "react";
import styled from "styled-components";
import Text from "./Text";

const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ContentContainer = styled.div`
    background-color: white;
    margin: 3rem;
    padding: 3rem;
    border: 0.2rem solid grey
    border-radius: 0.5rem
}
`;

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
    <ContentContainer>
      <Text size="big">{name}</Text>
      <hr />
      <Flex>
        <div>
          <Text>Height is {height}</Text>
          <Text>Mass is {mass}</Text>
          <Text>Gender is {gender}</Text>
        </div>
        <div>
          <Text>Hair color is {hair_color}</Text>
          <Text>Eye color is {eye_color}</Text>
          <Text>Skin color is {skin_color}</Text>
        </div>
      </Flex>

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
    </ContentContainer>
  );
}

export default Content;
