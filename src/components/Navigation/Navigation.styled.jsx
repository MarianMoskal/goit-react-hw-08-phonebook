import styled from "@emotion/styled";
// import { NavLink } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  background-color: orange;
  justify-content: space-around;
  padding: 5px 0 5px 0;
  margin-bottom: 10px;
  @media (min-width: 800px) {
    padding: 5px 200px 5px 200px;
  }
`;

const Button = styled.button`
  /* line-height: 18px; */
  font-weight: 500;
  margin-top: 10px;
  border-radius: 6px;
  border: none;
  background-color: teal;
`;

// const Link = styled.NavLink`
//   color: greenyellow;
//   padding: 15px;
//   text-decoration: none;
// `;

// const activeLink = styled.activeLink`
//   color: rgb(0, 153, 255);
// `;

export { Nav, Button };
