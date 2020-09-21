import React from 'react';

import Graph from './Graph';
import Table from './Table';

const Info = (props) => {
  return (
    <div>
      <Graph data={props.data}/>
      <Table data={props.data} />
    </div>
  )
}

export default Info;