import React from 'react';

import styles from './Row.module.scss';

const Row = ({ sale }) => {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <tr className={styles.row}>
      <td>{sale.weekEnding}</td>
      <td>${numberWithCommas(sale.retailSales)}</td>
      <td>${numberWithCommas(sale.wholesaleSales)}</td>
      <td>{numberWithCommas(sale.unitsSold)}</td>
      <td>${numberWithCommas(sale.retailerMargin)}</td>
    </tr>
  )
}

export default Row;
