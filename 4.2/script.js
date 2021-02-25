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
    //exercicio 5
let numbersBiggest=0;
for(let i=0;i<numbers.length;i++){
    if(numbers[i]>numbersBiggest){
        numbersBiggest=numbers[i];
    }
}
console.log(numbersBiggest);
    //exercicio 6
let numbersOdd=[];
for(let i=0;i<numbers.length;i++){
    if(numbers[i]%2!=0){
        numbersOdd.push(numbers[i]);
        console.log(numbers[i]+" adicionado ao array numbersOdd");
    }else{
        console.log(numbers[i]+" Não é impar")
    }
    }
    if(numbersOdd.length>0){
        console.log("Os numeros impares da array numbers são "+numbersOdd); 
    }else{
console.log("não há numeros impares na array numbers")}

        // exercicio 7

let numbersLowest=999999;

for(let i=0;i<numbers.length;i++){
    if(numbers[i]<numbersLowest){
        numbersLowest=numbers[i];
    }
}
console.log(numbersLowest)

    // exercicio 8
let to25=[];
for(let i=1;i<=25;i++){
    to25.push(i)
}
console.log(to25);


    // exercicio 9

for(let i=0;i<to25.length;i++){
    console.log(to25[i]/2)
}
    // exercicios bonus

let numbersMultiplicatedByTheNext=[]
for(let i=1;i<=numbers.length;i++){
    for(let o=0;o<i;o++){
    var resultado=numbers[o]*numbers[i];
    }
    numbersMultiplicatedByTheNext.push(resultado);
}
console.log(numbersMultiplicatedByTheNext);

for(let i=1;i<numbers.length;i++){
    for(let o=0;o<i;o++){
        if(numbers[i]<numbers[o]){
        let p1=numbers[i];
        let p2=numbers[o];
        numbers[i]=p2;
        numbers[o]=p1;
        }
    }
}
console.log(numbers);
for(let i=1;i<numbers.length;i++){
    for(let o=0;o<i;o++){
        if(numbers[i]>numbers[o]){
        let p1=numbers[i];
        let p2=numbers[o];
        numbers[i]=p2;
        numbers[o]=p1;
        }
    }
}
console.log(numbers);

console.log('hello world');