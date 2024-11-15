// function removeDuplicates(nums: number[]): number {
//     const map = new Map<number, number>();
//     // const expectedNums: number[] = [];
//     for (let i = 0; i < nums.length; i++) {
//         if (!map.has(nums[i])) {
//             map.set(nums[i], i);
//             // continue;
//         } else {
//             const index = nums.indexOf(nums[i]);
//             if (index !== -1) {
//                 nums.splice(index, 1);
//             }
//         }
//     }
//     return map.size;
// };
function plusOne(digits) {
    var RequiredNumber = 0;
    for (var i = digits.length - 1; i >= 0; i--) {
        RequiredNumber = RequiredNumber + digits[i] * Math.pow(10, (digits.length - 1 - i));
        console.log("Required Number is ", RequiredNumber);
    }
    var targetNumber = RequiredNumber + 1;
    console.log("Target Number is ", targetNumber);
    var resultedARRAY = [];
    var numOfDigits = Math.floor(Math.log10(Math.abs(targetNumber)) + 1);
    for (var i = 1; i < numOfDigits + 1; i++) {
        resultedARRAY.unshift(targetNumber % 10);
        targetNumber = Math.floor(targetNumber / 10);
    }
    return resultedARRAY;
}
;
console.log("Target Number is ", plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
console.log("gjerngeuir is ", 6145390195186705000 + 1);
