function cubeRoot(number){
    let low = 0         
    let high  = number

    for(let i = 0  ; i < 100 ; i ++ ){

        let middle = (low + high)/2;
        let cube = middle * middle * middle;

        if(cube === number){
            return middle;
        }

        if(cube < number){
            low = middle;

        }else{
            high = middle
        }
    }
    return low
}

console.log(cubeRoot(100));
console.log(Math.cbrt(100));
