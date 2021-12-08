export default function getSubCoordinates(
  directionsArray,
  startingHorizontal = 0,
  startingDepth = 0
) {
  let horizontalPosition = startingHorizontal;
  let depthPosition = startingDepth;

  const splitDirections = directionsArray.map((direction) => {
    return direction.split(' ');
  });

  splitDirections.forEach((direction) => {
    const amount = Number(direction[1]);
    switch (direction[0]) {
      case 'forward':
        horizontalPosition += amount;
        break;
      case 'backward':
        horizontalPosition =
          horizontalPosition === 0 ? 0 : horizontalPosition - amount;
        break;
      case 'up':
        depthPosition = depthPosition === 0 ? 0 : depthPosition - amount;
        break;
      case 'down':
        depthPosition += amount;
        break;
      default:
        break;
    }
  });

  return [horizontalPosition, depthPosition];
}
