import React from 'react';

import Graph from './Graph';

const Info = (props) => {
  return (
    <div>
      I am the info component
      <Graph data={props.data}/>
    </div>
  )
}

export default Info;