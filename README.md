# Hollow Diamond Pattern in JavaScript

This project prints a **Hollow Diamond Star Pattern** using JavaScript.
The program dynamically generates the diamond pattern based on the size provided by the user.

It demonstrates the use of **loops, conditional logic, and pattern algorithms** in JavaScript.

---

## 📌 Problem Statement

Write a program that prints a **hollow diamond pattern** of stars (`*`) for a given size `n`.

Example when `n = 5`:

```
    *
   * *
  *   *
 *     *
*       *
 *     *
  *   *
   * *
    *
```

---

## 🧠 Logic Used

1. The total number of rows in the diamond is calculated as:

```
totalRows = 2 * n - 1
```

2. The middle index of the diamond is:

```
middle = n - 1
```

3. For every row we calculate the **distance from the middle row**.

4. Based on this distance we determine the **left and right star positions**.

5. A star (`*`) is printed only when the current column matches those positions; otherwise a space is printed.

---

## 💻 Implementation

```javascript
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

// Example
printHollowDiamond(5);
```

---

## ⚙️ How to Run

1. Install **Node.js** (if not installed).
2. Save the file as:

```
diamond.js
```

3. Run the program:

```bash
node diamond.js
```

---

## 📂 Project Structure

```
hollow-diamond-pattern
│
├── diamond.js
└── README.md
```

---

## 🚀 Features

* Clean and readable code structure
* Input validation
* Reusable function implementation
* Beginner-friendly algorithm explanation

---

## 📚 Concepts Covered

* JavaScript Loops
* Conditional Statements
* Pattern Printing Algorithms
* Code Structuring

---

## 👨‍💻 Author

**Shivansh Dubey**

B.Tech CSE

Technologies: Java, JavaScript, React, MySQL

---
