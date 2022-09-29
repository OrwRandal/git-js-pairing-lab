//Code your solutions in this file
function fiveToOneHundred(){
    for(let i = 5; i<=100; i++){
        console.log(i)
    }
}
//fiveToOneHundred();
function multiplesOfThree(){
    for(let i = 3; i<=100; i+=3){
        console.log(i)
    }
}
//console.log(multiplesOfThree());

function multiplesOfThreeOrFive(){
    for(let i =3; i<=100; i++ ){
        if (i%3 === 0 || i % 5 === 0 ){
            console.log(i);
        }
    }
    
}
//multiplesOfThreeOrFive();
function untilNum(int){
    for(let i = 1; i<=int; i++){
        console.log(i)
    }
}
//console.log(untilNum(12))

function multiply(num1,num2){
    return num1 * num2;
}
//console.log(multiply(50,5642));
function add(num1,num2){
    if(num1!==num2){
        return num1 + num2
    }else{ return (num1 + num2) * 3
        
    }
}
//console.log(add(2,2));

function isNegative(num){
    if (num<0){
        return true;
    } else if (num === 0){
        return "Not potivie or negative"

    }else {
        return false;
    }
}
//console.log(isNegative(7));        
function triangleArea(height, base){
    return 1/2 * base * height;
}
//console.log(triangleArea(5,7));
function betweenTwentyAndFourty(num){
    return num < 40 && num > 20;
}
//console.log(betweenTwentyAndFourty(21));
function largest(num1, num2, num3){
    if(num1 > num2 && num1>num3){return num1}
    else if(num2 > num1 && num2 > num3){return num2}
    else{return num3}
}
//console.log(largest(4,5,3));
function printTime(){let today = new Date();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
return time}
console.log(printTime());