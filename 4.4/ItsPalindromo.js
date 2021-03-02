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
    numbersGeted.push(Math.ceil(Math.random()*15));
}
console.log(numbersGeted)
function BiggestIndex(){
    let biggest=0;
    for (let index=1;index<numbersGeted.length;index++){
        for(let ondex=0;ondex<index;ondex++){
            if (numbersGeted[index]>numbersGeted[ondex]){
                biggest=index;
            }else{
                biggest=ondex;
            }
        }
    }
    return biggest +"\n"+numbersGeted[biggest];
}
console.log(BiggestIndex())