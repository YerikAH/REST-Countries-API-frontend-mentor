import { Country, ErrorCountry } from "../interface/data";

const API_URL = "https://restcountries.com/v3.1";

const searchByCode = async (code: string): Promise<Country | ErrorCountry> => {
  try {
    const res = await fetch(`${API_URL}/alpha/${code}`);
    const json = await res.json();
    return json[0];
  } catch (err) {
    return err as ErrorCountry;
  }
};

const getCountry = async () => {
  try {
    const res = await fetch(`${API_URL}`);
    const json = await res.json();
    return json;
  } catch (err) {
    return err as ErrorCountry;
  }
}

export { searchByCode, getCountry };
