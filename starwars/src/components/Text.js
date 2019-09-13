import React from "react";
import styled from "styled-components";

//Creating Text component using styled component
const Text = styled.p`
  font-size: ${props => {
    if (props.size === "big") {
      return "3rem";
    } else if (props.size === "small") {
      return "1.3rem";
    } else {
      return "2rem";
    }
  }};
  font-weight: ${props => props.weight};
`;

export default Text;
