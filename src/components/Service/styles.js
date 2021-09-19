import styled from "styled-components";

const ServiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 10px 30px;
  width: 35%;
`;

const ServiceLogo = styled.div`
  width: 200px;
  height: 200px;
  content: "";
  background-position: center;
  border-radius: 50%;
  background-image: url(${(props) => props.image});
  background-size: 120%;
`;

const ServiceName = styled.h4``;

const ServiceDescription = styled.p`
  line-height: 1.5rem;
  width: 100%;
  margin: 0px;
`;

export { ServiceWrapper, ServiceLogo, ServiceName, ServiceDescription };
