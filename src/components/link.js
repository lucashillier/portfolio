import styled from "styled-components";

const ButtonLink = styled.a`
  appearance: button;
  -webkit-appearance: button; /* Safari and Chrome */
  -moz-appearance: button; /* Firefox */
  -ms-appearance: button; /* Internet Explorer */

  padding: 5px 15px;
  color: #000;
  text-decoration: none;
  cursor: default;
  border: 2px solid white;
  background-color: ${props => props.color || "white"};
  border-radius: 3px;
  width: fit-content;

  &:hover {
    border: 2px solid #0080ff;
  }
`;

const Link = styled.a`
  color: lightblue;
`;

export { ButtonLink, Link };
