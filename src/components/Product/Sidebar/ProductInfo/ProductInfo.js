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
      <div className={styles.tags}>
        { data.tags.map((tag, i) => 
          <p key={i} className={styles.tag}>
            { tag }  
          </p>
        )}
      </div>
    </div>
  )
}

export default ProductInfo;