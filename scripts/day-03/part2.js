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

function findMostCommon(arr) {
  return arr.map((itemArray) => {
    return itemArray.reduce((previous, current) => {
      if (current === 0) {
        return previous - 1;
      }

      return previous + 1;
    }, 0);
  });
}

function getRatings(arr, mostCommonFilter, leastCommonFilter) {
  let positionedArrays = createArraysByPosition(arr);
  let mostCommonBits = findMostCommon(positionedArrays);
  let ratingArray = arr;

  for (let i = 0; i < mostCommonBits.length; i++) {
    if (ratingArray.length === 1) {
      break;
    }
    if (mostCommonBits[i] >= 0) {
      ratingArray = ratingArray.filter((item) => {
        return item[i] === mostCommonFilter;
      });
    } else if (mostCommonBits[i] < 0) {
      ratingArray = ratingArray.filter((item) => {
        return item[i] === leastCommonFilter;
      });
    }
    positionedArrays = createArraysByPosition(ratingArray);
    mostCommonBits = findMostCommon(positionedArrays);
  }

  return ratingArray;
}

export default function getLifeSupport(reportArray) {
  const oxygenRating = getRatings(reportArray, '1', '0');
  const scrubberRating = getRatings(reportArray, '0', '1');

  return parseInt(oxygenRating, 2) * parseInt(scrubberRating, 2);
}
