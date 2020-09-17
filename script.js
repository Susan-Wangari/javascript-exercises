// function squareNumbers(arr) {
//     value = [];
//     for(let i = 0, len = arr.length; i < len; i++) {
//         value.push(arr[i] * arr[i]);
//     }
//     return value;
// }
// console.log(squareNumbers(2, 4, 5, 10));

// function squareNumbers(arr) {
//     val = [];
//     for(let i = 0, len = arr.length; i < len; i++) {
//         root = Math.pow(arr[i], 2);
//     }
//     return val;
// }
// console.log(squareNumbers(2, 4, 5, 10));

//squares numbers in an array
let numbers = [2, 4, 5, 10];
numbers.forEach(function(element,index, array) {
    array[index] = element * element;
});
console.log(numbers);

//filtering out odd numbers from an array
let numbers = [2, 5, 7, 9, 11, 12, 14, 13, 20];
let even = [];
let odd = [];

let evenNumbers = function(numbers) {
    for(let i = 0; i < numbers.length; i++) {
        if((numbers[i] % 2) != 1) {
            even.push(numbers[i]);
            console.log(even);
        } else {
            odd.push(numbers[i]);
        }
    }
};
evenNumbers(numbers);
alert(even);

//sum of numbers in an array
let myArray = [2, 5, 7, 9, 11, 12, 14, 13, 20];
let total = 0;
for(let i in myArray) {total += myArray[i];}

//using map to square numbers in an array
let numbers = [2, 4, 5, 10];
let square = numbers.map(x => x ** 2);
console.log(square);

//using filter to return even numbers in an array
const evenNumbers = [2, 5, 7, 9, 11, 12, 14, 13, 20].filter((number) => number % 2 === 0);
console.log(evenNumbers);

//using reduce to get the sum of numbers in an array
console.log([2, 5, 7, 9, 11, 12, 14, 13, 20].reduce((a, b) => a + b, 0));

//a function that reorders numbers in an array
console.log([2, 5, 7, 9, 11, 12, 14, 13, 20].sort((a, b) =>a - b, 0));
