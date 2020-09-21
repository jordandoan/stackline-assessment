import React from 'react';
import styles from './Header.module.scss';
import logo from './stackline.png';

const Header = () => {
  return (
    <div className={styles.main}>
      <img alt="Stackline logo" src={logo} className={styles.image} />
      <h1>Stackline</h1>
    </div>
  )
}

export default Header;