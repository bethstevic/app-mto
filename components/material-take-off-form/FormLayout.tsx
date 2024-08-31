import React from 'react';

import {MATERIAL_TAKEOFFS} from '@/data/mocks';
import { useMaterialTakeOffForm, MaterialTakeOffFormContextValue } from '@/contexts/material-take-off-form-context';

import Section from './section/Section';
import styles from './FormLayout.module.scss';

const FormLayout = () => {
  const {
    editMode,
    setEditMode,
  } = useMaterialTakeOffForm() as MaterialTakeOffFormContextValue;

  return (
    <>
      <div className={styles.buttonContainer}>
        {!editMode &&
          <button onClick={() => setEditMode(true)}>Edit</button>
        }
        {editMode &&
          <>
            <button onClick={() => setEditMode(false)}>Cancel</button>
            <button onClick={() => setEditMode(false)}>Save</button>
          </>
        }
      </div>
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
    </>
  )
}

export default FormLayout;