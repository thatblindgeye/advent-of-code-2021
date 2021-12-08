export default function checkDepthIncrements(inputArray) {
  let totalIncreases = 0;

  inputArray.forEach((measurement, index) => {
    if (index > 0 && measurement > inputArray[index - 1]) {
      totalIncreases++;
    }
  });

  return totalIncreases;
}
