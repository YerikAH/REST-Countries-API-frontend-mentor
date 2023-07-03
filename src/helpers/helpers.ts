import { Country } from "../interface/data";
import { searchByCode } from "../services/services";

const populationSeparate = (population: number) => {
  const numberToArray = population.toString().split("").reverse();
  let newArray = [];
  for (let i = 0; i < numberToArray.length; i++) {
    const item = numberToArray[i];
    newArray.push(item);
    if ((i + 1) % 3 === 0) {
      newArray.push(",");
    }
  }
  if (numberToArray.length % 3 === 0) {
    newArray.reverse().shift();
    return newArray.join("");
  } else {
    return newArray.reverse().join("");
  }
};

const arrayToString = (data: string[]) => {
  return data.join(", ");
};
const objectToString = (data: object) => {
  return Object.values(data).join(", ");
};
const getNameMoney = (data: object) => {
  let money: string[] = [];
  for (let i = 0; i < Object.values(data).length; i++) {
    money.push(Object.values(data)[i].name);
  }
  return money.join(", ");
};

export {
  populationSeparate,
  arrayToString,
  objectToString,
  getNameMoney,
};
