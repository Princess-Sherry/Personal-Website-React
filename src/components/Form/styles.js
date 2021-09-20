import styled from "styled-components";

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  [type="submit"] {
    background-color: #fad9df;
    width: auto;
    padding: 0px 20px;
    align-self: center;
    color: #595758;
  }

  [type="submit"]:hover {
    color: white;
  }
`;

const Label = styled.label`
  color: #595758;
`;

const Input = styled.input`
  width: 100%;
  height: 2rem;
  padding: 5px;
  border: 2px solid lightgray;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  margin-bottom: 20px;
  height: 100px;
  width: 100%;
  text-align: start;
  padding: 10px 5px;
  font-family: sans-serif;
  border: 2px solid lightgray;
  border-radius: 5px;
`;

export { FormWrapper, Label, Input, TextArea };
