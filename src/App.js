import React from 'react';
import { connect } from  'react-redux';


import styles from './app.module.scss';
const App = ({ title }) => {
  return (
    <div>
      <h1 className={styles.title}>Title: {title}</h1>
      <p>Welcome!</p>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    title: state.title
  }
};

export default connect(mapStateToProps, {})(App);
