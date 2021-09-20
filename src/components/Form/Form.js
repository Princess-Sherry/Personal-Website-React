import { FormWrapper, Label, Input, TextArea } from './styles';

const Form = () => (
    <FormWrapper>
        <Label for="name">Name </Label><br/>
        <Input type="text" id="name" name="name" placeholder="Your full name" /><br/>
        <Label for="email">Email </Label><br/>
        <Input type="text" id="email" name="email" placeholder="Your email address" /><br/>
        <Label for="message">Message </Label><br/>
        <TextArea id="message" name="message" placeholder="Your message to me"></TextArea>
        <Input type="submit" value="Send Message" />
    </FormWrapper>
);

export default Form;