import email from "assets/icons/email.svg";
import location from "assets/icons/location.svg";
import phone from "assets/icons/phone.svg";
import tick from "assets/icons/tick.svg";
import ContactItem from "components/ContactItem";
import Form from "components/Form";
import Map from "components/Map";
import Highlight from "components/Styles/Highlight";
import PageContentRow from "components/Styles/PageContentRow";
import PageTitle from "components/Styles/PageTitle";
import React from "react";
import "./Contact.css";

const Contact = () => (
  <div class="Contact">
    <PageTitle>Contact</PageTitle>
    <PageContentRow>
      <ContactGetInTouch />
      <ContactForm />
    </PageContentRow>
  </div>
);

const ContactGetInTouch = () => (
  <div class="ContactGetInTouch">
    <h3>
      Get in <Highlight>Touch</Highlight>
    </h3>
    <Map />
    <ContactItem icon={location} detail="Tokyo, Japan"></ContactItem>
    <ContactItem icon={email} detail="sailormoon@gmail.com"></ContactItem>
    <ContactItem icon={phone} detail="(850) 898-9559"></ContactItem>
    <ContactItem icon={tick} detail="Always Available"></ContactItem>
  </div>
);

const ContactForm = () => (
  <div class="ContactForm">
    <h3>
      Contact <Highlight>Form</Highlight>
    </h3>
    <Form />
  </div>
);

export default Contact;
