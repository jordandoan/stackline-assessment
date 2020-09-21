import React from 'react';
import CanvasJSReact from '../../../../canvasjs.react';

import { createOptions } from './createOptions';


const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Graph = (props) => {
  return (
    <div>
      <CanvasJSChart 
        options={createOptions(props.data.sales)}
      />
    </div>
  )
}

export default Graph;