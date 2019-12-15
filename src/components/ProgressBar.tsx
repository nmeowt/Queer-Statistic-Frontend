import React from 'react';
import { lighten, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import styled from 'styled-components';
import { top10CityColor } from "../config/consts";

type PropsProgressBar = {
  place?: top10CityColor,
  percent?: number
}

const ProgressBars: React.FC<PropsProgressBar> = ({ place, percent }) => {
  console.log(place);
  return (
    <Root>
      <LinearColor
        variant="determinate"
        value={percent}
        theme={place}
      />
    </Root>
  );
}

export default ProgressBars;

const Root = styled.div`
  flex-grow: 1;
`;

const LinearColor = styled(LinearProgress)`
  margin: 8px;

  &.MuiLinearProgress-colorPrimary{
    height: 10px;
    background-color: ${props => lighten(props.theme, 0.5)};

    .MuiLinearProgress-barColorPrimary {
      border-radius: 20px;
      background-color: ${props => props.theme};
    }
  }
`