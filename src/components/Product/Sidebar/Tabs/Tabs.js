import React from 'react';

import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faChartLine } from '@fortawesome/free-solid-svg-icons';

import { assignSales } from '../../../../redux/actions';

import styles from './Tabs.module.scss';

const Tabs = (props) => {
  console.log(props.showSales);
  return (
    <div>
      <p onClick={() => props.assignSales(false)} className={`${styles.tab} ${!props.showSales ? '' : `${styles.unselected}`}`}>      
        <FontAwesomeIcon icon={faHome} className={`${styles.icon} ${!props.showSales ? '' : `${styles.unselected}`}`}  /> 
        Overview
      </p>
      <p onClick={() => props.assignSales(true)} className={`${styles.tab} ${props.showSales ? '' : `${styles.unselected}`}`}>
        <FontAwesomeIcon icon={faChartLine} className={`${styles.icon} ${props.showSales ? '' : `${styles.unselected}`}`} />
        Sales
      </p>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    showSales: state.showSales
  }
}

export default connect(mapStateToProps, {assignSales: assignSales})(Tabs);
