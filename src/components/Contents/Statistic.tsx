import React from "react";
import Card from '@material-ui/core/Card';
import styled from 'styled-components';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const Statistic: React.FC = () => {
  return (
    <Stat>
      <ListWrapper aria-label="contacts">
        <ListItem button>
          <ListItemText primary="Saigon" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Hanoi" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Da Nang" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Nha Trang" />
        </ListItem>
      </ListWrapper>
    </Stat>
  )
}

export default Statistic;

const Stat = styled(Card)`
  position: fixed;
  -moz-transform: translateZ(0);
  -o-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  top: 50%;
  -moz-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  background: none;
  -moz-transition: all 2s cubic-bezier(0.19, 1, 0.22, 1) 0s;
  -o-transition: all 2s cubic-bezier(0.19, 1, 0.22, 1) 0s;
  -webkit-transition: all 2s cubic-bezier(0.19, 1, 0.22, 1) 0s;
  transition: all 2s cubic-bezier(0.19, 1, 0.22, 1) 0s;
`;
const ListWrapper = styled(List)`
  flex-basis: 100%;
  background-color: #fff;
`;