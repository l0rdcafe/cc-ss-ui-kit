import styled from "styled-components";

export const List = styled.ol`
  padding-left: 0;
  margin-top: 0;
  list-style: ${props => (props.ordered ? "number" : "none")};
  margin-bottom: 2.5rem;

  ul,
  ol {
    margin: 1.5rem 0 1.5rem 3rem;
    font-size: 90%;
  }

  li {
    margin-bottom: 1rem;
  }
`;

export default List;
