const USE_URL = {
  ALL_DATA_URL: "",
  REGION_DATA_URL: "" 
}  

const ApiService = {
  getAllData: async () => {
    try {
      const res = await fetch(USE_URL.ALL_DATA_URL)
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
export { ApiService }
