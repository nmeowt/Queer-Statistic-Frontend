import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";
import classnames from "classnames";

const Header: React.FC = () => {
  const [navbarColor, setNavbarColor] = useState<string>("");
  const updateNavbarColor = () => {
    if (
      document.documentElement.scrollTop > 149 ||
      document.body.scrollTop > 149
    ) {
      setNavbarColor("navbar-fixed");
    } else if (
      document.documentElement.scrollTop < 150 ||
      document.body.scrollTop < 150
    ) {
      setNavbarColor("");
    }
  }

  useEffect(() => {
    updateNavbarColor();
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("", navbarColor)}>
      <CenterDiv item lg={10} xl={10}>
        <Logo>
          <Text href="#">Queer Statistic</Text>
        </Logo>
      </CenterDiv>
    </Navbar>
  );
}

export default Header;

const Navbar = styled.header`  
  background: transparent;
  position: absolute;
  width: 100%;
  z-index: 1;
  height: 70px;
  -moz-transition: transform 0.6s ease 0s;
  -o-transition: transform 0.6s ease 0s;
  -webkit-transition: transform 0.6s ease 0s;
  transition: transform 0.6s ease 0s;
`;
const Logo = styled.div`
  font-size: 25px;
  font-weight: 700;
  letter-spacing: 0.5px;
  display: block;
  padding-top: 12px;
  color: #fff;
  text-transform: uppercase;
`;
const CenterDiv = styled(Grid)`
  padding-top: 16px;
  margin: 0 auto !important;
  overflow: hidden;
  float: none;
  clear: both;
`;
const Text = styled.a`
  color: #fff;
  text-decoration: none;
`;