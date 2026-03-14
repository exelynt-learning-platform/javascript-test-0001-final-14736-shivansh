// Hollow Diamond Pattern

let n = 5;                     // size of the diamond
let total = 2 * n - 1;         // total rows

for (let i = 0; i < total; i++) {

  let start, end;

  // upper part of diamond
  if (i < n) {
    start = n - 1 - i;
    end = n - 1 + i;
  } 
  // lower part of diamond
  else {
    let temp = total - i - 1;
    start = n - 1 - temp;
    end = n - 1 + temp;
  }

  let row = "";

  for (let j = 0; j < total; j++) {

    if (j === start || j === end) {
      row += "*";
    } else {
      row += " ";
    }

  }

  console.log(row);
}