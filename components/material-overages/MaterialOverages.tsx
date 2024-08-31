import React from 'react';

import styles from './MaterialOverages.module.scss';

const MaterialOverages = () => {
  return (
    <div className={styles.container}>
      <label htmlFor="PVC">PVC</label>
      <input type="text" id="PVC" name="PVC" />
      <label htmlFor="KDAT">KDAT</label>
      <input type="text" id="KDAT" name="KDAT" />
      <label htmlFor="LVL">LVL</label>
      <input type="text" id="LVL" name="LVL" />
      <label htmlFor="PSL">PSL</label>
      <input type="text" id="PSL" name="PSL" />      
      <label htmlFor="whitewood">whitewood</label>
      <input type="text" id="whitewood" name="whitewood" />
      <label htmlFor="general">general</label>
      <input type="text" id="general" name="general" />
    </div>
  )
}

export default MaterialOverages;