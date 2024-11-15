/*
Time Complexity
    1. Time complexity is the amount of time it takes for a function run for a specific input
    2. Notation: O(1) -- constant time. Ex: Accessing an array index
                 O(logn) -- Time grows logarthmically.  Ex: Binary Search & sorted array
                 O(n) -- linearly Ex: Simple loop
                 O(n^2) -- Quadratically Ex: Nested loop
                 O(2^n) -- Exponentially Ex: Recursion

 */

/*
Space Complexity
    1. Space complexity is the amount of memory used by a function for a specific input. 
    2. Notation: O(1) -- constant space, O(logn) -- Space grows logarthmically, O(n) -- linearly, O(n^2) -- Quadratically, O(2^n) -- Exponentially.
*/

// Measuring Time complexity
const start = process.hrtime();

for (let i = 0; i < 1e3; i++) {
    // console.log(i);
}

const [seconds, nanoseconds] = process.hrtime(start);

console.log(`Exection Time: ${seconds}s, ${nanoseconds / 1e6} ms`);


// Measuring space complexity
const initialMemory = process.memoryUsage().heapUsed;

const largeArray = Array(1e6).fill(0);

const finalMemory = process.memoryUsage().heapUsed;

console.log(`Memory Usage : ${(finalMemory - initialMemory) / 1024 / 1024} MB`);