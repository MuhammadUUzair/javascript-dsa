console.log("The round off value of 10.45 is: ",Math.round(10.45));
console.log("The ceil value of 10.1 is: ",Math.ceil(10.1));
console.log("The floor value of 10.1 is: ",Math.floor(10.1));
console.log("The truncate value of 18.98 is: ",Math.trunc(18.98));
console.log("The power of 2^5 is: ",Math.pow(2,5));
console.log("The square root value of 69 is: ", Math.sqrt(69));
console.log("The cube root value of 25 is: ", Math.cbrt(25));
console.log("The absolute value of -25 is: ", Math.abs(-25));
console.log("The Maximum value between 24,55 is: ", Math.max(24,55));
console.log("The Minimum value between 24,55 is: ", Math.min(24,55));
console.log("The random value  is: ", Math.trunc(Math.random()* 9000+1000)); //give you the value between the 0 to 1 in float

let floatNumber = 8.944415
console.log(Number(floatNumber.toFixed(2)));
console.log(typeof(floatNumber)); //so the .toFixed() will return the string 

// find the area and perimeter of rectangle
let x = 5;
let y = 7;
let area = x * y;
let perimeter = 2 * ( x + y )
console.log("The Area of rectangle is: ", area);
console.log("The Perimeter of rectangle is: ", perimeter);

// find the area by heron's formula

let a = 5;
let b = 4;
let c = 3;

let semiPerimeter = (a + b + c)/2;
let s = semiPerimeter;

console.log("the area of triangle by heron's formula is: ",Math.sqrt(s * (s - a) * (s - b) * (s - c)))

// find the circumference

let  r =12;

console.log("The circumference is : ", Number((2* Math.PI*r).toFixed(2)))