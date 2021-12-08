function createArraysByPosition(arr) {
  const arrayByPosition = [];

  // assumes all items in array are of equal length
  for (let i = 0; i < arr[0].length; i++) {
    arrayByPosition.push([]);
    arr.forEach((item, index) => {
      arrayByPosition[i].push(Number(arr[index][i]));
    });
  }

  return arrayByPosition;
}

function reduceArrayItems(arr) {
  return arr.map((itemArray) => {
    return itemArray.reduce((previous, current) => {
      if (current === 0) {
        return previous - 1;
      }

      return previous + 1;
    }, 0);
  });
}

export default function getPowerConsumption(reportArray) {
  const positionedArray = createArraysByPosition(reportArray);
  const reducedArrays = reduceArrayItems(positionedArray);

  const gammaArray = reducedArrays.map((item) => (item < 0 ? 0 : 1));
  const gammaRate = gammaArray.join('');

  const epsilonArray = reducedArrays.map((item) => (item < 0 ? 1 : 0));
  const epsilonRate = epsilonArray.join('');

  return parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);
}
