import styled from "styled-components";

export const Input = styled.input`
  height: 3em;
  padding: 0.5%;
  background-color: transparent;
  border: 1px solid #aaa;
  border-radius: 2px;
  box-shadow: 2px 1px 1px #aaa;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin-bottom: 1.5rem;

  &:focus {
    border: 1px solid #0074d9;
    outline: 0;
  }
`;

export const Textarea = Input.withComponent("textarea").extend`
  min-height: 65px;
  padding-top: 6px;
  padding-bottom: 6px;
`;
