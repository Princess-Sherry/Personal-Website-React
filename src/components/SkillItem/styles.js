import styled from "styled-components";

const SkillItemName = styled.div`
  font-size: 0.9rem;
`;

const SkillItemScore = styled.div`
  background-color: lightgray;
  border-radius: 2px;
  overflow: hidden;
  content: "";
  height: 1rem;
  margin: 10px 0px;
  position: relative;

  &::after {
    background-color: #fad9df;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    content: "";
    width: ${(props) => props.score};
  }
`;

export { SkillItemName, SkillItemScore };
