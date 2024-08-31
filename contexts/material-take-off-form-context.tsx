import React, {createContext, useContext, useState} from 'react'

export interface MaterialTakeOffFormContextValue {
  editMode: boolean
  setEditMode: (editMode: boolean) => void
  saveSuccessful: boolean
}

export const MaterialTakeOffFormContext = createContext<MaterialTakeOffFormContextValue | null>(null)

export const MaterialTakeOffFormContextProvider = ({children}: {children: React.ReactNode}) => {
  const [editMode, setEditMode] = useState(false)
  const [saveSuccessful, setSaveSuccessful] = useState(false)

  const value = {
    editMode,
    setEditMode,
    saveSuccessful
  }
  return <MaterialTakeOffFormContext.Provider value={value}>{children}</MaterialTakeOffFormContext.Provider>
}

export const useMaterialTakeOffForm = () => {
  const context = useContext<MaterialTakeOffFormContextValue | null>(MaterialTakeOffFormContext)

  if (context === undefined) {
    throw new Error ('Context must be used within a Provider')
  }

  return context
}