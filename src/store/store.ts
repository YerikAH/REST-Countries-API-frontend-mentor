import { ThemeApp } from '@/enum/enum'
import type {Country} from '@/interface/data'
import type { DataError, DataSuccess } from '@/interface/interface'
import {apiService} from '@/service/service'
import { reactive, ref } from 'vue'

const theme = ref<ThemeApp>(ThemeApp.light)
const saveData = ref<Country[]>([])
const data = reactive<DataSuccess>({
  data: [],
  error: {
    status: 0,
    statusText: "No request"
  },
  loading: false,
})
const getAllData = async () =>	{
  data.loading = true
  try{
    const dataCountry = await apiService.getAllData()  as Country[]
    data.data = dataCountry
    saveData.value = dataCountry
  }catch(err){
    const errorCountry = err as DataError
    data.error = errorCountry
  }finally{
    data.loading = true
  }
}
const getSearchData = (query: string) => {
  if(query.trim() === '') return data.data = saveData.value
  const countryFilter: Country[] = saveData.value.filter(item => {
    const element = item.name.common.toLowerCase()
    return element.includes(query.toLocaleLowerCase())
  })
  data.data = countryFilter 
}
const filterByRegion = (region: string) => {
  const countryFilter = saveData.value.filter( item => item.region === region)
  data.data = countryFilter
}		
const changeTheme = () =>
  (theme.value = theme.value === ThemeApp.dark ? ThemeApp.light : ThemeApp.dark)

export { theme, changeTheme, data, getAllData, getSearchData, filterByRegion }
