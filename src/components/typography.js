import styled from "styled-components";

export const H1 = styled.h1`
  margin-top: 0;
  margin-bottom: 2rem;
  font-weight: 700;
  font-size: 4rem;
  line-height: 1.2;
  letter-spacing: -0.1rem;
  color: #000;

  @media (min-width: 550px) {
    font-size: 5rem;
  }
`;

export const H2 = H1.withComponent("h2").extend`
  font-size: 3.6rem;
  line-height: 1.25;
  letter-spacing: -0.1rem;

  @media (min-width: 550px) {
    font-size: 4.2rem;
  }
`;

export const H3 = H2.withComponent("h3").extend`
  font-size: 3rem;
  line-height: 1.3;
  letter-spacing: -0.1rem;

  @media (min-width: 550px) {
    font-size: 3.6rem;
   }
`;

export const H4 = H3.withComponent("h4").extend`
  font-size: 2.4rem;
  line-height: 1.35;
  letter-spacing: -0.08rem;

  @media (min-width: 550px) {
    font-size: 3rem;
   }
`;

export const H5 = H4.withComponent("h4").extend`
  font-size: 1.8rem;
  line-height: 1.5;
  letter-spacing: -0.05rem;

  @media (min-width: 550px) {
    font-size: 2.4rem;
   }
`;

export const H6 = H5.withComponent("h4").extend`
  font-size: 1.5rem;
  line-height: 1.6;
  letter-spacing: 0;

  @media (min-width: 550px) {
    font-size: 1.5rem;
  }
`;

export const P = styled.p`
  margin-top: 0;
  color: ${props => (props.primary ? "#000" : "#fff")};
  text-align: ${props => (props.align ? props.align : "left")};
`;
