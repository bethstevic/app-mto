export interface Customer {
  id?: number,
  name: string, 
  streetAddress: string, 
  city: string, 
  zipCode: string,
  data?: string
}

export interface Category {
  id: number,
  name: string, 
  exact: number, 
  type: string, 
  usedFor: string, 
  notes: string
}

export interface MaterialCategories {
  [key: string]: Category[]
}