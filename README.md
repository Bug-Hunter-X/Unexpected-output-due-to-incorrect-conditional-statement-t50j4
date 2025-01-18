# Unexpected output due to incorrect conditional statement

This repository demonstrates a common JavaScript bug where an unexpected output occurs because of an incorrectly written conditional statement. The code is designed to add two numbers, but it returns 0 if either input is 0.

## Bug Description

The function `foo` intends to add two numbers. It contains a condition that checks if either `a` or `b` is equal to 0.  If either is 0, the function returns 0 which is unintended behaviour.  The expected behavior is that the function will still add the numbers if one of them is zero. For instance, `foo(1,0)` should return `1`, and `foo(0,1)` should return `1`.

## Bug Solution

The solution involves modifying the conditional statement to correctly check for the conditions in a way that produces the desired output. The corrected code will handle the scenario where only one of the two numbers is 0.

## How to run

1. Clone this repository.
2. Open `bug.js` to see the buggy code and its output.
3. Open `bugSolution.js` to see the corrected code and its output.

This demonstrates a simple yet important scenario highlighting the significance of precise conditional logic in programming.