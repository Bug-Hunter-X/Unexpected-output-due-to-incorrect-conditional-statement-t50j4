function foo(a, b) {
  if (a === 0 || b === 0) { 
    return 0; //This will cause the unexpected output
  }
  return a + b;
}

console.log(foo(0, 1)); //Output: 0
console.log(foo(1, 0)); //Output: 0
console.log(foo(1, 1)); //Output: 2