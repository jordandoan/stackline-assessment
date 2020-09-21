import React from 'react';

import ProductInfo from './ProductInfo';
import Tabs from './Tabs';

const Sidebar = ({ data }) => {
  return (
    <div>
      <ProductInfo data={data} />
      <Tabs />
    </div>
  )
}

export default Sidebar;
