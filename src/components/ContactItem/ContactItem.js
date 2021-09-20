import {
  ContactItemDetail,
  ContactItemIcon, ContactItemWrapper
} from "./styles";

const ContactItem = ({ icon, detail }) => (
  <ContactItemWrapper>
    <ContactItemIcon src={icon} alt=""></ContactItemIcon>
    <ContactItemDetail>{detail}</ContactItemDetail>
  </ContactItemWrapper>
);

export default ContactItem;
