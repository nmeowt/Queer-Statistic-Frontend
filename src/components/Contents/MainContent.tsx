import React from "react";
import Header from "../Header/Header";
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import Typist from 'react-typist';

const MainContent: React.FC = () => {
  return (
    <>
      <Header />
      <Main>
        <Section item lg={10} md={11} sm={11}>
          <Typing>
            <Typist
              avgTypingDelay={100}>
              Xin chào các anh chị em buê đuê!
            </Typist>
          </Typing>
          <TextExample>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </TextExample>
          <TextExample>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </TextExample>
          <TextExample>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </TextExample>
          <TextExample>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </TextExample>
          <TextExample>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </TextExample>
        </Section>
      </Main>
    </>
  )
}

export default MainContent;

const Main = styled.div`
  margin-top: 150px;
  background: #fff;
  border-top-left-radius: 10px;
  -moz-transition: all 0.9s cubic-bezier(0.19, 1, 0.22, 1) 0s;
  -o-transition: all 0.9s cubic-bezier(0.19, 1, 0.22, 1) 0s;
  -webkit-transition: all 0.9s cubic-bezier(0.19, 1, 0.22, 1) 0s;
  transition: all 0.9s cubic-bezier(0.19, 1, 0.22, 1) 0s;
`;
const Section = styled(Grid)`
  margin: 0 auto !important;
  overflow: hidden;
  float: none;
  clear: both;
  padding-top: 80px;
  padding-bottom: 80px;
`;
const Typing = styled.h1`
  color: rgb(0, 0, 0);
  overflow: hidden;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: .15em;
  text-transform: capitalize;
`;
const TextExample = styled.div`
  padding-top: 30px;
`