export default function getSubCoordinates(
  directionsArray,
  startingHorizontal = 0,
  startingDepth = 0,
  startingAim = 0
) {
  let horizontalPosition = startingHorizontal;
  let depthPosition = startingDepth;
  let aim = startingAim;

  const splitDirections = directionsArray.map((direction) => {
    return direction.split(' ');
  });

  splitDirections.forEach((direction) => {
    const amount = Number(direction[1]);
    switch (direction[0]) {
      case 'forward':
        horizontalPosition += amount;
        depthPosition += aim * amount;
        break;
      case 'backward':
        horizontalPosition =
          horizontalPosition === 0 ? 0 : horizontalPosition - amount;

        depthPosition = depthPosition === 0 ? 0 : depthPosition - amount * aim;
        break;
      case 'up':
        aim -= amount;
        break;
      case 'down':
        aim += amount;
        break;
      default:
        break;
    }
  });

  return [horizontalPosition, depthPosition];
}
