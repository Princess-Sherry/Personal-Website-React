import {
    ServiceDescription,
    ServiceLogo,
    ServiceName,
    ServiceWrapper
} from "./styles";

const Service = ({ logo, name, description }) => (
  <ServiceWrapper>
    <ServiceLogo image={logo} />
    <ServiceName>{name}</ServiceName>
    <ServiceDescription>{description}</ServiceDescription>
  </ServiceWrapper>
);

export default Service;
