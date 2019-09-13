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
    margin: 3rem 0;
    padding: 3rem;
    border: 0.2rem solid grey
    border-radius: 0.5rem
}
`;

const StyledUl = styled.div`
  font-size: 1.2rem;
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
        </div>
        <div>
          <Text>Gender is {gender}</Text>
          <Text>Hair color is {hair_color}</Text>
        </div>
        <div>
          <Text>Eye color is {eye_color}</Text>
          <Text>Skin color is {skin_color}</Text>
        </div>
      </Flex>

      <Flex>
        <StyledUl>
          {films.map(film => (
            <li>Fav film: {film}</li>
          ))}
        </StyledUl>

        <StyledUl>
          {starships.map(starship => (
            <li>Starship owned: {starship}</li>
          ))}
        </StyledUl>

        <StyledUl>
          {vehicles.map(vehicle => (
            <li>Vehicle owned: {vehicle}</li>
          ))}
        </StyledUl>
      </Flex>
    </ContentContainer>
  );
}

export default Content;
