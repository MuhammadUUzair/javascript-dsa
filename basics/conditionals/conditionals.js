// Valid Voter Question

// let input = prompt("Enter you age?")

// while(input === '' || isNaN(Number(input))){
//     alert("Enter valid Number")
//     input = prompt("Enter you age?")
// }

// let ans = Number(input)

// if(ans >= 18){
//     alert("you can vote")
// }else{
//     alert("you can't vote")
// }

// Discount Question

// let amount = prompt("What is the bill amount? ")

// while(amount === "" || isNaN(Number(amount)) || Number(amount) <=0){
//     alert("Enter the valid amount greater than 0")
//     amount = prompt("What is the bill amount? ")
// }

// let dis = 0;
// let price = Number(amount)



// if ( price <=5000 ){
//     dis = 0;
// }
// else if ( price <= 7000 ){
//     dis = 5;
// }
// else if ( price <=9000 ){
//     dis = 10
// }
// else{
//     dis = 20;
// }

// let finalPrice = price - Math.floor((dis * price)/100)
// alert("you have to pay "+ finalPrice)

// electricity Bill Question

// function calculateBill(unit){

//     let amount = 0;

//     if(unit > 400){
//         amount = (unit - 400) * 13;
//         unit = 400;
//     }
//     if(unit > 200 && unit <= 400){
//         amount += (unit - 200) * 8;
//         unit = 200;
//     }
//     if(unit > 100 && unit <= 200){
//         amount += (unit - 100) * 6
//         unit = 100
//     }
//     amount += unit * 4;
//     return amount;
// }

// console.log(calculateBill(700))

// rupees denominations 

let amount = 5001

if (amount >= 5000) {
    console.log("5000 note appear/s: " + Math.floor(amount / 5000) + " time/s")
    amount = amount % 5000
}
if (amount >= 1000) {
    console.log("1000 note appear/s: " + Math.floor(amount / 1000) +" time/s" )
    amount = amount % 1000
}
if (amount >= 500) {
    console.log("500 rupees note appear/s: " + Math.floor(amount / 500) + " time/s")
    amount = amount % 500
}
if (amount >= 100) {
    console.log("100 rupees note appear/s: " + Math.floor(amount / 100) + " time/s")
    amount = amount % 100
}
if (amount >= 50) {
    console.log("50 rupees note appear/s: " + Math.floor(amount / 50) + " time/s")
    amount = amount % 50
}
if (amount >= 20) {
    console.log("20 rupees note appear/s: " + Math.floor(amount / 20) + " time/s")
    amount = amount % 20
}
if (amount >= 10) {
    console.log("10 rupees note appear/s: " + Math.floor(amount / 10) + " time/s")
    amount = amount % 10
}
if (amount >= 5) {
    console.log("5 rupees coin appear/s: " + Math.floor(amount / 5) + " time/s")
    amount = amount % 5
}
if (amount >= 2) {
    console.log("2 rupees coin appear/s: " + Math.floor(amount / 2) + " times/s")
    amount = amount % 2
}
if(amount === 1){
    console.log("1 rupee coin appear/s: "+ amount + " time/s")
    amount = amount % 1
}


console.log("the remain amount is : ", amount)