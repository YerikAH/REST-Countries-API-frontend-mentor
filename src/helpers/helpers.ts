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

const capitalDefined = (data: string[]) => {
  const capital: string | undefined = data[0];
  if (capital === undefined) {
    return "Has no capital";
  } else {
    return capital;
  }
};

export { populationSeparate, capitalDefined };
