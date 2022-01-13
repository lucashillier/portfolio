import styled from "styled-components";

const Avatar = styled.img`
  width: 50%;
  vertical-align: middle;
  border-radius: 50%;
`;

const Image = styled.img`
  width: ${props => props.width || 100};
`;

export { Avatar, Image };
