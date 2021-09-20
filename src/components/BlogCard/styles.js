import styled from "styled-components";

const BlogCardWrapper = styled.div`
  box-sizing: border-box;
  margin: 30px 10px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.1);
  padding-bottom: 20px;
  &:hover {
    box-shadow: 0px 0px 15px 10px rgba(0, 0, 0, 0.2);
  }
`;

const BlogCardCover = styled.div`
  content: "";
  width: 390px;
  height: 200px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  position: relative;
  background-image: url(${(props) => props.cover});
`;
const BlogCardDate = styled.div`
  color: gray;
  background-color: #fad9df;
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 5px;
  border-radius: 5px;
`;

const BlogCardType = styled.div`
  margin-top: 10px;
  line-height: 2rem;
  text-align: center;
  color: gray;
  font-size: 0.8rem;
`;

const BlogCardTitle = styled.h3`
  line-height: 2rem;
  text-align: center;
  font-size: 1rem;
  margin: 0;
`;

const BlogCardLink = styled.a`
  color: #595758;
  &:hover {
    color: #fad9df;
  }
`;

export {
  BlogCardWrapper,
  BlogCardCover,
  BlogCardDate,
  BlogCardTitle,
  BlogCardType,
  BlogCardLink,
};
