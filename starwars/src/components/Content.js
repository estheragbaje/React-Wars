import React from "react";
import styled from "styled-components";
import Text from "./Text";

const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
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
      <Text size="big" color="#7ec0ee">
        {name}
      </Text>
      <hr />
      <Flex>
        <div>
          <Text>Height is {height}"</Text>
          <Text>Mass is {mass}kg</Text>
          <Text>Gender is {gender}</Text>
        </div>
        <div>
          <Text>Hair color is {hair_color}</Text>
          <Text>Eye color is {eye_color}</Text>
          <Text>Skin color is {skin_color}</Text>
        </div>
      </Flex>

      <Flex>
        <ul>
          {films.map(film => (
            <li>Fav film: {film}</li>
          ))}
        </ul>
        <ul>
          {starships.map(starship => (
            <li>Starship owned: {starship}</li>
          ))}
        </ul>
        <ul>
          {vehicles.map(vehicle => (
            <li>Vehicle owned: {vehicle}</li>
          ))}
        </ul>
      </Flex>
    </ContentContainer>
  );
}

export default Content;
