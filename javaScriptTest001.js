/**
 * Prints a hollow diamond star pattern
 * @param {number} size - Size of the diamond (must be >= 1)
 */

function printHollowDiamond(size) {
  if (!Number.isInteger(size) || size < 1) {
    console.error("Invalid input: size must be a positive integer.");
    return;
  }

  const totalRows = 2 * size - 1;
  const middle = size - 1;

  for (let row = 0; row < totalRows; row++) {
    let line = "";

    // distance from middle row
    const distance = Math.abs(middle - row);

    const left = distance;
    const right = totalRows - distance - 1;

    for (let col = 0; col < totalRows; col++) {
      if (col === left || col === right) {
        line += "*";
      } else {
        line += " ";
      }
    }

    console.log(line);
  }
}

// Example usage
printHollowDiamond(5);
