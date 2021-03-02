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