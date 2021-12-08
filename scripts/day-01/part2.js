export default function createReducedWindows(inputArray, windowSize) {
  const windowedArray = [];

  inputArray.forEach((measurement, index) => {
    if (!inputArray[index + windowSize - 1]) return;

    const newWindow = [];
    for (let i = 0; i < windowSize; i++) {
      newWindow.push(inputArray[index + i]);
    }
    windowedArray.push(newWindow);
  });

  return windowedArray.map((window) => {
    return window.reduce((current, previous) => current + previous);
  });
}
