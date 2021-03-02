function GetReverse(x){
    let word=x;
    let wordReversed="";
    for(let index=word.length-1;index>=0;index--){
        wordReversed=wordReversed+word[index];
    }
    return wordReversed;
}

console.log(GetReverse("macaco"));