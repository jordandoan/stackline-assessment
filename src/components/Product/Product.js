import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Info from './Info';
import Sidebar from './Sidebar';

import { loadDefault } from '../../redux/actions';

import styles from './Product.module.scss';

const Product = (props) => {
  useEffect(() => {
    props.loadDefault();
  }, [])

  return (
    <div className={styles.main}>
      <div className={styles.sidebar}>
        <Sidebar data={props.data}/>
      </div>
      <div className={styles.info}>
        <Info data={props.data}/>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    data: state.data,
    showSales: state.showSales
  }
}

export default connect(mapStateToProps, {loadDefault: loadDefault})(Product);