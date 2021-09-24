import styled from "styled-components";

const HomeHeader = styled.div`
  background-color: #fad9df;
  color: #595758;
  font-size: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  margin-top: 0;
  margin-bottom: 0;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
  padding-bottom: 20px;
`;

const InfoName = styled.h2`
  margin: 0;
`;

const InfoOccupation = styled.div`
  font-size: 1.5rem;
  margin-top: 0.5rem;
`;

const InfoLinks = styled.div`
  margin-top: 0.5rem;
  display: flex;
  z-index: 500;
`;

export { HomeHeader, Info, InfoName, InfoOccupation, InfoLinks };
