import type { Country } from "@/interface/data"
import type { DataError } from "@/interface/interface"

const USE_URL = {
  ALL_DATA_URL: 'https://restcountries.com/v3.1/all',
  COUNTRY_DATA_URL: 'https://restcountries.com/v3.1/name/'
}

const apiService = {
  getAllData: async () => {
    try {
      const res: Response = await fetch(USE_URL.ALL_DATA_URL)
      const json: Country[] = await res.json()
      if (!res.ok)
      throw { 
	status: res.status,
          statusText: res.statusText
        }
      return json
    } catch (err ) {
      const error = err as DataError
      return error
    }
  },
  getCountryData: async ( query: string) => {
    try {
      const res = await fetch(`${USE_URL.COUNTRY_DATA_URL}${query}`)
      const json = await res.json() 
      if (!res.ok)
        throw {
          status: res.status,
          statusText: res.statusText
        }
      return json
    } catch (err) {
      return err
    }
  }
}
export { apiService }
