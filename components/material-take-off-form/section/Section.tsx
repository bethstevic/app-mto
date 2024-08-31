import React, {useState} from 'react'

import { MATERIAL_TAKEOFFS, MATERIAL_OVERAGES } from '@/data/mocks'
import { camelCaseToText } from '@/helpers/strings'
import { useMaterialTakeOffForm, MaterialTakeOffFormContextValue } from '@/contexts/material-take-off-form-context';

import styles from './Section.module.scss'

const getMaterialOverage = (materialType: string, exact: number) => {
  // @ts-ignore
  if ((MATERIAL_OVERAGES[materialType.toLower])) {
    // @ts-ignore
    return MATERIAL_OVERAGES[materialType.toLower] * exact
  }
  return MATERIAL_OVERAGES['general'] * exact
}

const Section = ({
  section
}: {section: string}) => {
   const {
    editMode,
    setEditMode,
  } = useMaterialTakeOffForm() as MaterialTakeOffFormContextValue;
  return (
    <div className={styles.container}>
      <div className={styles.title}>{camelCaseToText(section)}</div>
      <table className={styles.table}>
        <th className={styles.header}>exact</th>
        <th className={styles.header}>total to order</th>
        <th className={styles.header}>fill now</th>
        <th className={styles.header}>fill later</th>
        <th className={styles.header}>material size</th>
        <th className={styles.header}>material type</th>
        <th className={styles.header}>used for</th>
        <th className={styles.header}>notes</th>
        {
          // @ts-ignore
        MATERIAL_TAKEOFFS[section].map((material) => (
          <tr key={material.id}>
            <td className={styles.cell}>
              <input 
                type="number" 
                value={material.exact}
                readOnly={!editMode}
              />
            </td>
            <td className={styles.cell}>{Math.ceil(getMaterialOverage(material.materialType, material.exact))}</td>
            <td className={styles.cell}><input type="checkbox" readOnly={!editMode} /></td>
            <td className={styles.cell}><input type="checkbox" readOnly={!editMode} /></td>
            <td className={styles.cell}>
                <textarea 
                  value={material.materialSize}
                  readOnly={!editMode}
                />
              </td>
            <td className={styles.cell}>
              <textarea 
                value={material.materialType}
                readOnly={!editMode}
              />
            </td>
            <td className={styles.cell}>
              <textarea 
                value={material.usedFor}
                readOnly={!editMode}
              />
            </td>
            <td className={styles.cell}>
              <textarea 
                value={material.notes}
                readOnly={!editMode}
              />
            </td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default Section;