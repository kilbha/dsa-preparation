/*
Recursion is a way to call a function from inside itself.
*/
// Factorial
function factorial(n) {
    if (n == 0 || n == 1)
        return 1;
    return n * factorial(n - 1);
}
console.log("Factorial of factorial(5) = ", factorial(5));
// Fibonacci  
function fibonacci(n) {
    if (n <= 1)
        return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log("Fibonacci of fibonacci(5) = ", fibonacci(2));
// Sum of array in typescript
function sumArray(arr, n) {
    if (n <= 0)
        return 0;
    return arr[n - 1] + sumArray(arr, n - 1);
}
var arr = [1, 2, 3, 4, 5];
console.log("Sum of array = ", sumArray(arr, arr.length));
