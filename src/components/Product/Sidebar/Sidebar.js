import React from 'react';

import ProductInfo from './ProductInfo';
import Tabs from './Tabs';

import styles from './Sidebar.module.scss';

const Sidebar = ({ data }) => {
  return (
    <div>
      <ProductInfo data={data} />
      <hr className={styles.break}/>
      <Tabs />
    </div>
  )
}

export default Sidebar;
