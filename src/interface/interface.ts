import type { Country } from './data'
export interface DataError {
    status: number,
    statusText: string
}
export interface DataSuccess{
  data: Country[]	
  error: DataError
  loading: boolean
}
