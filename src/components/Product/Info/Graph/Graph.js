import React from 'react';
import CanvasJSReact from '../../../../canvasjs.react';

import { createOptions } from './createOptions';

import styles from './Graph.module.scss';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Graph = (props) => {
  return (
    <div>
      <p className={styles.header}>Retail Sales</p>
      <CanvasJSChart 
        options={createOptions(props.data.sales)}
      />
    </div>
  )
}

export default Graph;