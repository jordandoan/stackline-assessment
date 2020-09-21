import React from 'react';

import Graph from './Graph';
import Table from './Table';

import styles from './Info.module.scss';

const Info = (props) => {
  return (
    <div className={styles.main}>
      <Graph data={props.data}/>
      <Table data={props.data} />
    </div>
  )
}

export default Info;