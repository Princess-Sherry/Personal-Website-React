import styled from "styled-components";

const ContactItemWrapper = styled.div`
  color: #595758;
  font-size: 1rem;
  display: flex;
  flex-direction: row;
`;

const ContactItemIcon = styled.img`
  padding: 5px;
  margin-right: 10px;
  margin-top: auto;
  margin-bottom: auto;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  background-color: #fad9df;
`;

const ContactItemDetail = styled.div`
  line-height: 3rem;
  display: flex;
  align-items: baseline;
`;

export { ContactItemWrapper, ContactItemIcon, ContactItemDetail };
