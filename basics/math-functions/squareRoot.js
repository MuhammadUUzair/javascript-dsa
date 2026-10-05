function squareRoot(number) {
    let low = 0;
    let high = number;
    let middle;
    let square

    for(let i = 0; i < 100; i++){
        middle = (low+high)/2;
        square = middle * middle;

        if( square === number){
            return middle;
        }

        if(square < number){
            low = middle;
        }else{
            high = middle;
        }
    }
    return low;
}

console.log(squareRoot(25))
console.log(Math.sqrt(25))