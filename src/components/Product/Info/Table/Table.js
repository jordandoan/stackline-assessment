import React from 'react';

import Row from './Row';

import styles from './Table.module.scss';

const Table = (props) => {
  return (
    <div>
      <table className={styles.table}>
        <tr className={styles.header}>
          <th>Week Ending</th>
          <th>Retail Sales</th>
          <th>Wholesale Sales</th>
          <th>Units Sold</th>
          <th>Retailer Margin</th>
        </tr>
        {props.data.sales.map(sale => <Row sale={sale}/>)}
      </table>
    </div>
  )
}

export default Table;