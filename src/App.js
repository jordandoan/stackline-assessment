import React from 'react';
import Header from './components/Header';
import Product from './components/Product';

import styles from './app.module.scss';

const App = () => {
  return (
    <div className={styles.main}>
      <Header />
      <Product />
    </div>
  )
}

export default App;
