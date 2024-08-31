import React from 'react';

import FormLayout from '@/components/material-take-off-form/FormLayout';
import { MaterialTakeOffFormContextProvider } from '@/contexts/material-take-off-form-context';
import { Customer } from '@/components/types';

import styles from './CustomerInfo.module.scss';


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
      <MaterialTakeOffFormContextProvider>
        <FormLayout />
      </MaterialTakeOffFormContextProvider>
    </>
  );
}

export default CustomerInfo;