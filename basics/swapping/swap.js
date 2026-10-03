// Swap using extra variable

function swapWithTemp(a, b){
    let temp  = a;
    a = b;
    b = temp;

    return [a,b]
}

// Swap using arithmetic operations

function swapwithArithmetic(a, b){
    a = a + b;
    b = a - b;
    a = a - b;

    return [a,b]
}


// Swap using the array destructuring

function swapWithDestructuring(a,b){
    [a, b] = [b, a]
    
    return [a,b]
}

console.log(swapWithTemp(10,20));
console.log(swapwithArithmetic(10,20));
console.log(swapWithDestructuring(10,20));


