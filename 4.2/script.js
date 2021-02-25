let numbers=[5,9,3,19,70,8,100,2,35,27]
let numbersSoma=0;
    // exercicio 1
for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}
    // exercicio 2
for(let i=0;i<numbers.length;i++){
    numbersSoma=numbersSoma+parseInt(numbers[i]);
}
console.log(numbersSoma);

    // exercicio 3
let numbersaverage=numbersSoma/numbers.length;
console.log(numbersaverage);

    // exercicio 4
if(numbersaverage>=20){
    console.log("valor maior que 20")
}else{
    console.log("valor menor que 20")
}

