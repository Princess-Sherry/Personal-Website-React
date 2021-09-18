import styled from "styled-components";

const ExperienceWrapper = styled.div`
  box-sizing: border-box;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
  border-radius: 10px;
  border-left: 2px solid #fad9df;
  margin-top: 2rem;
  margin-bottom: 2rem;
  position: relative;

  &::before {
    content: "";
    width: 50px;
    border-bottom: 2px solid #fad9df;
    position: absolute;
    left: -50px;
    top: 35px;
  }

  &::after {
    content: "";
    width: 10px;
    height: 10px;
    border: 2px solid #fad9df;
    border-radius: 50%;
    position: absolute;
    left: -60px;
    top: 29px;
    background-color: white;
  }
`;

const ExperienceTitle = styled.h4`
  font-size: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const ExperienceYear = styled.span`
  color: #f492ab;
  font-size: 0.8rem;
`;

const ExperienceLocation = styled.span`
  color: gray;
  font-size: 0.8rem;
`;

const ExperienceDetail = styled.p`
  line-height: 1.8rem;
`;

export {
  ExperienceWrapper,
  ExperienceTitle,
  ExperienceYear,
  ExperienceLocation,
  ExperienceDetail,
};
