import React from 'react';

import styles from './ProductInfo.module.scss';
const ProductInfo = ({ data }) => {
  return (
    <div>
      <div>
        <img className={styles.image} src={ data.image } />
        <div className={styles.textMain}>
          <h2>{ data.title }</h2>
          <p className={styles.subtitle}>{ data.subtitle }</p>
        </div>
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

export default ProductInfo;