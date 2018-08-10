import styled from "styled-components";

export const Button = styled.button`
  background: ${props => (props.primary ? "#0074d9" : "transparent")};
  color: ${props => (props.primary ? "#fff" : "#0074d9")};
  border-radius: 4px;
  border: 1px solid #0074d9;
  text-transform: uppercase;
  display: inline-block;
  height: 3em;
  padding: 0 2em;
  text-align: center;
  font-size: 11px;
  font-weight: 700;
  line-height: 3em;
  letter-spacing: 0.05rem;
  text-decoration: none;
  white-space: nowrap;
  transition: opacity 0.2s;
  cursor: pointer;
  box-sizing: border-box;
  margin-bottom: 1rem;

  &:hover {
    opacity: 0.6;
  }
`;

export const ButtonDisabled = Button.withComponent("button").extend`
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
  background: #fff;
  color: #000;
  border: 1px solid #000;
`;
