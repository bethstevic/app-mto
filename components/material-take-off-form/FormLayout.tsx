import React from 'react';

import {MATERIAL_TAKEOFFS} from '@/data/mocks';

import Section from './section/Section';
import styles from './FormLayout.module.scss';

const FormLayout = () => {
  return (
      <div className={styles.container}>
        {Object.keys(MATERIAL_TAKEOFFS).map((materialCategory: string) => (
          <Section 
            // @ts-ignore
            key={MATERIAL_TAKEOFFS[materialCategory].id} 
            // @ts-ignore
            section={materialCategory} 
          />
        ))}
      </div>
  )
}

export default FormLayout;