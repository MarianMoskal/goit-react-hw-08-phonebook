import styled from "@emotion/styled";

const Label = styled.label`
  display: block;
  margin-top: 10px;
  font-weight: 500;
`;
const Input = styled.input`
  /* display: block; */
  margin-top: 5px;
  line-height: 15px;
  border: none;
  border-radius: 6px;
  outline: red;
  &:focus {
    border: 1px dashed black;
    background-color: tomato;
  }
  &::placeholder {
    text-align: center;
    color: black;
  }
`;

const Submit = styled.button`
  font-weight: 500;
  margin: 10px 0;
  border-radius: 6px;
  border: none;
  background-color: orange;
`;

const FormS = styled.form`
  text-align: center;
  padding: 15px;
  border: 1px solid black;
`;

const Spinner = styled.span`
  display: inline-block;
  margin-left: 10px;
`;

const Title = styled.h2`
  color: yellow;
`;

const Error = styled.p`
  color: yellow;
  text-align: center;
  margin: 0, auto;
`;

export { Label, Input, Submit, FormS, Spinner, Error, Title };
