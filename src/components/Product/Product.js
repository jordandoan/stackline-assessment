import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Info from './Info';
import Sidebar from './Sidebar';

import { loadDefault } from '../../redux/actions';

const Product = (props) => {
  console.log(props);
  useEffect(() => {
    props.loadDefault();
  }, [])

  return (
    <div>
      Product page
      <Info data={props.data}/>
      <Sidebar data={props.data}/>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps, {loadDefault: loadDefault})(Product);