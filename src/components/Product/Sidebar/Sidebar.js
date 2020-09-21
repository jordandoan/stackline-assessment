import React from 'react';

import styles from './Sidebar.module.scss';
const Sidebar = ({ data }) => {
  return (
    <div>
      <div>
        <img className={styles.image} src={ data.image } />
        <h2>{ data.title }</h2>
        <p>{ data.subtitle }</p>
      </div>
      <div>
        { data.tags.map(tag => 
          <div className={styles.tag}>
            { tag }  
          </div>
        )}
      </div>
    </div>
  )
}

export default Sidebar;
