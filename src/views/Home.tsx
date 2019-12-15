import React from "react";
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import backgroundImg from '../assets/img/background.jpg';
import Statistic from "../components/Contents/Statistic";
import { Container } from "@material-ui/core";
import MainContent from "../components/Contents/MainContent";

const Home: React.FC = () => {
  return (
    <>
      <Background />
      <BackgroundOverlay />
      <ContainerGrid maxWidth="xl">
        <Grid container spacing={4}>
          <GridStatistic item lg={4} xs={12}>
            <Statistic />
          </GridStatistic>
          <MainGrid item lg={8} xs={12}>
            <MainContent />
          </MainGrid>
        </Grid>
      </ContainerGrid>
    </>
  );
}

export default Home;

const Background = styled.div`
  background: transparent url(${backgroundImg}) no-repeat;
  height: 100%;
  width: 100%;
  z-index: -1;
  position: fixed;
  background-position: center;
  background-size: cover;
  -moz-transform: translateZ(0);
  -o-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  bottom: 0;
`;
const BackgroundOverlay = styled.div`
  background: rgba(0, 8, 16, 0.23);
  height: 100%;
  width: 100%;
  z-index: -1;
  -moz-transform: translateZ(0);
  -o-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  position: fixed;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  bottom: 0;
`;
const ContainerGrid = styled(Container)`
  padding-right: 0 !important;
`;
const MainGrid = styled(Grid)`
  padding: 0 !important;
`;
const GridStatistic = styled(Grid)`
  padding: 0 30px !important;
`;