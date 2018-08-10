import styled from "styled-components";

export const Notification = styled.div`
  width: 40%;
  margin-bottom: 1.25em;
  color: #fff;
  height: 20vh;
  background: ${props => (props.error ? "#0074d9" : "#ff4136")};
  margin: auto;
  display: flex;
  align-items: center;
  border-radius: 2px;
  justify-content: center;
`;

export default Notification;
