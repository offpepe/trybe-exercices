const { number } = require("yargs");

function getReverse(x){
    let word=x;
    let wordReversed="";
    for(let index=word.length-1;index>=0;index--){
        wordReversed=wordReversed+word[index];
    }
    return wordReversed;
}
function itsPolindromo(x){
    let checker=0;
    let word=x;
    getReversed=getReverse(x)
        for(let index=0;index<word.length;index++){
            if(word[index]==getReversed[index]){
                checker++
            }
        }
    if(checker==word.length){
        return true;
    }
    else{
        return false;
    }
}
console.log(itsPolindromo("arara"))
console.log(itsPolindromo("desenvolvimento"))
let numbersGeted=[];
for(let index=0;index<=10;index++){
    numbersGeted.push(Math.ceil(Math.random()*100));
}
function biggestIndex(){
    let biggest=0;
    let number=0;
    for (let index=0;index<numbersGeted.length;index++){
        if(numbersGeted[index]>number){
            number=numbersGeted[index];
            biggest=index;
        }
    }
    return "O array: "+numbersGeted+"\n Maior numero: "+number+"\n Seu índice: "+biggest;
}
console.log(biggestIndex())

function lowestIndex(){
    let lowest=0;
    let number=101;
    for (let index=0;index<numbersGeted.length;index++){
        if(numbersGeted[index]<number){
            number=numbersGeted[index];
            lowest=index;
        }
    }
    return "O array: "+numbersGeted+"\n Menor numero: "+number+"\n Seu índice: "+lowest;
}
console.log(lowestIndex())

let names=['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']
function biggestName(){
    let caracNumber=0;
    let biggestNameIndex;
    for(let index=0;index<names.length;index++){
        if(names[index].length>caracNumber){
        caracNumber=names[index].length;
        biggestNameIndex=index;}
    }
    return names[biggestNameIndex]
}
console.log(biggestName());

function getRepeater(){
    let numbers = [2, 3, 2, 5, 8, 2, 3];
    let repeatedNumbers=[];
    for(let index=1;index<numbers.length;index++){
        for(let ondex=0;ondex<index;ondex++){
            if(numbers[index]==numbers[ondex]){
                repeatedNumbers.push(numbers[index]);
            }
        }
    }
    return repeatedNumbers;
}

function mostRepeated(){
repeatedNumbers=getRepeater();
let mostRepeated;
    for(let index=0;index<repeatedNumbers.length;index++){
        if(repeatedNumbers[index]==repeatedNumbers[index+1]){
            mostRepeated=repeatedNumbers[index];
        }        
    }
    return mostRepeated
}
console.log(mostRepeated())

function fatorial(x){
let numbersToWork=[];    
let result=0;
    for(let index=0;index<x;index++){
        numbersToWork.push(x-index);
    }
    for(let index=0;index<numbersToWork.length;index++){
        result=result+numbersToWork[index];
    }
    return result+"\n"+numbersToWork;
}
console.log(fatorial(5));