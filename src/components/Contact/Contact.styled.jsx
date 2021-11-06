import styled from "@emotion/styled";

const Button = styled.input`
  font-weight: 500;
  margin-top: 10px;
  border-radius: 6px;
  border: none;
  background-color: orange;
`;

const Item = styled.span`
  /* display: flex; */
  margin-right: 20px;

  @media (min-width: 550px) {
    display: inline-block;
    min-width: 400px;
  }
`;

const Name = styled.span`
  display: inline-block;
  min-width: 50px;
  margin-right: 20px;

  @media (min-width: 550px) {
    min-width: 200px;
  }
`;

const Spinner = styled.span`
  display: inline-block;
  margin-left: 10px;
`;

export { Item, Button, Name, Spinner };
