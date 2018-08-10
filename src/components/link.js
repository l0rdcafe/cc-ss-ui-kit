import styled from "styled-components";

export const LinkElement = styled.a`
  color: ${props => (props.primary ? "#0074d9" : "#85144b")};
  text-decoration: none;
  transition: opacity 0.25s;

  &:hover {
    opacity: 0.6;
  }
`;

export default LinkElement;
