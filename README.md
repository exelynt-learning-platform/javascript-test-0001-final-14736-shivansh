# javascript-test-0001-final-14736-shivansh
Final Project Assignment - This repository contains the complete final project code and documentation.



# Hollow Diamond Pattern (JavaScript)

## Overview

This program prints a **hollow diamond pattern** using JavaScript.
The diamond is created by printing stars (`*`) at the correct positions while filling the rest of the spaces with blanks.

The pattern size can be adjusted by changing the value of `n`.

Example for `n = 5`:

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

## How the Program Works

1. **Diamond Size**

   * The variable `n` controls the height of the upper half of the diamond.

2. **Total Rows**

   * The total number of rows in the diamond is calculated as:

   ```
   total = 2 * n - 1
   ```

3. **Upper Half**

   * The first `n` rows create the upper part of the diamond.

4. **Lower Half**

   * The remaining rows mirror the upper half to complete the diamond.

5. **Star Placement**

   * Two positions (`start` and `end`) determine where stars should appear in each row.
   * All other positions are filled with spaces.

---

## Code

```javascript
// Hollow Diamond Pattern

let n = 5;                     // size of the diamond
let total = 2 * n - 1;*
```
