import React from "react";
import Card from '@material-ui/core/Card';
import styled from 'styled-components';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ProgressBar from "../ProgressBar";
import { top10CityColor } from "../../config/consts";

const Statistic: React.FC = () => {
  return (
    <Stat>
      <ListWrapper>
        <ListItem button dense>
          <ListItemTextWrapper primary="Hà Nội" />
          <ProgressBar place={top10CityColor.first} percent={70} />
          <Percent>70%</Percent>
        </ListItem>
      </ListWrapper>
      <ListWrapper>
        <ListItem button dense>
          <ListItemTextWrapper primary="Sài Gòn" />
          <ProgressBar place={top10CityColor.second} percent={65} />
          <Percent>65%</Percent>
        </ListItem>
      </ListWrapper>
      <ListWrapper>
        <ListItem button dense>
          <ListItemTextWrapper primary="Đà nẵng" />
          <ProgressBar place={top10CityColor.third} percent={50} />
          <Percent>50%</Percent>
        </ListItem>
      </ListWrapper>
      <ListWrapper>
        <ListItem button dense>
          <ListItemTextWrapper primary="nghệ an" />
          <ProgressBar place={top10CityColor.fourth} percent={55} />
          <Percent>55%</Percent>
        </ListItem>
      </ListWrapper>
      <ListWrapper>
        <ListItem button dense>
          <ListItemTextWrapper primary="huế" />
          <ProgressBar place={top10CityColor.fifth} percent={50} />
          <Percent>50%</Percent>
        </ListItem>
      </ListWrapper>
      <ListWrapper>
        <ListItem button dense>
          <ListItemTextWrapper primary="nha trang" />
          <ProgressBar place={top10CityColor.sixth} percent={45} />
          <Percent>45%</Percent>
        </ListItem>
      </ListWrapper>
      <ListWrapper>
        <ListItem button dense>
          <ListItemTextWrapper primary="quảng ninh" />
          <ProgressBar place={top10CityColor.seventh} percent={40} />
          <Percent>40%</Percent>
        </ListItem>
      </ListWrapper>
      <ListWrapper>
        <ListItem button dense>
          <ListItemTextWrapper primary="thanh hóa" />
          <ProgressBar place={top10CityColor.eighth} percent={35} />
          <Percent>35%</Percent>
        </ListItem>
      </ListWrapper>
      <ListWrapper>
        <ListItem button dense>
          <ListItemTextWrapper primary="hải phòng" />
          <ProgressBar place={top10CityColor.ninth} percent={30} />
          <Percent>30%</Percent>
        </ListItem>
      </ListWrapper>
      <ListWrapper>
        <ListItem button dense>
          <ListItemTextWrapper primary="hải dương" />
          <ProgressBar place={top10CityColor.tenth} percent={25} />
          <Percent>25%</Percent>
        </ListItem>
      </ListWrapper>
    </Stat>
  )
}

export default Statistic;

const Stat = styled(Card)`
  overflow-y: scroll !important;
  height: calc(100% - 270px);
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
  width: 100%;
  min-width: 360px;
  max-width: 370px;
`;
const ListItemTextWrapper = styled(ListItemText)`
  max-width: 150px;
  text-transform: capitalize;
`
const Percent = styled.span`
  font-size: 0.675rem;
  color: #616161;
`