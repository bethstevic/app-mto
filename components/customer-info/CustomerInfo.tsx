import React from 'react';

import FormLayout from '@/components/material-take-off-form/FormLayout';
import styles from './CustomerInfo.module.scss';

import { Customer } from '@/components/types';

const CustomerInfo = ({ 
  name,
  streetAddress,
  city,
  zipCode 
}: Customer) => {
  return (
    <>
      <div className= {styles.container}>
        <div className={styles.name}>{name}</div>
        <div className={styles.address}>{streetAddress}</div>
        <div className={styles.address}>{city}, GA {zipCode}</div>
      </div>
      <FormLayout />
    </>
  );
}

export default CustomerInfo;