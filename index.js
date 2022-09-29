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