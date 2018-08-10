import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;

  @media (max-width: 400px) {
    width: 80%;
  }

  @media (max-width: 550px) {
    width: 85%;
    padding: 0;
  }
`;

export const Hero = styled.div`
  height: ${props => (props.size ? props.size * 20 : "20vh")};

  .hero__body {
    padding: 2%;
    height: 100%;
    width: 80%;
    display: flex;
    align-items: center;
  }
`;

export const Section = styled.div`
  padding: 2.5%;
  margin: 1.5%;

  .section__body {
    padding: 2%;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
