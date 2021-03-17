
window.onload=function(){
localStorage.getItem("darkmode");
let textColorToogle=false;
let main = document.getElementsByTagName("main");
let darkModeButtom = document.getElementById("darkModeButtom");
let changeTextColorButton = document.getElementsByClassName("textColors");
let lineHeightButton=document.getElementsByClassName("lineHeight")
let fontChangerButton=document.getElementsByClassName("changeFont");
console.log("onload working");
// darkModeButtom.addEventListener("click",darkMode);
// changeTextColorButton[0].addEventListener("click",textBlue);
// changeTextColorButton[1].addEventListener("click",textRed);
// changeTextColorButton[2].addEventListener("click",textGreen);
// changeTextColorButton[3].addEventListener("click",textPink);
// changeTextColorButton[4].addEventListener("click",textDefault);
// lineHeightButton[0].addEventListener("click",defaultLineHeight);
// lineHeightButton[1].addEventListener("click",aLittleBitLineHeight);
// lineHeightButton[2].addEventListener("click",largerLineHeight);
// fontChangerButton[0].addEventListener("click",defaultFont);
// fontChangerButton[1].addEventListener("click",courierNewFont);
// fontChangerButton[2].addEventListener("click",monospaceFont);
    // function darkMode(){
    //     if (localStorage.getItem("darkmode")=="false"){
    //         console.log("darkmode function geted")
    //         document.body.style.backgroundColor=("black");
    //         document.querySelector("header").style.backgroundColor="white";
    //             for (let index = 0; index < document.getElementsByClassName("titleHeader").length; index++) {
    //                 document.getElementsByClassName("titleHeader")[index].style.color="black";                   
    //             }
    //             if(textColorToogle===false){
    //             for (let index = 0; index < main.length; index++) {
    //                 main[index].style.color="white";
                    
    //             }
    //         }
    //         document.getElementById("default").style.backgroundColor="white";
    //         document.getElementById("darkModeImg").style.filter="invert(0%)"
    //         } 
    //         if(localStorage.getItem("darkmode")=="true"){
    //             console.log("darkmode function geted")
    //             document.body.style.backgroundColor=("white");
    //             document.querySelector("header").style.backgroundColor="black";
    //                 for (let index = 0; index < document.getElementsByClassName("titleHeader").length; index++) {
    //                     document.getElementsByClassName("titleHeader")[index].style.color="white";                   
    //                 }
    //                 if(textColorToogle===false){
    //                 for (let index = 0; index < main.length; index++) {
    //                     main[index].style.color="black";
    //                 }
    //             }
    //             document.getElementById("default").style.backgroundColor="black";
    //             document.getElementById("darkModeImg").style.filter="invert(100%)"
    //         }
    // }
    // 
    // function defaultLineHeight(){
    //     for (let index = 0; index < document.querySelectorAll('p').length; index++) {
    //         document.querySelectorAll('p')[index].style.lineHeight="normal"
            
    //     }
    // }
    // function aLittleBitLineHeight(){
    //     for (let index = 0; index < document.querySelectorAll('p').length; index++) {
    //         document.querySelectorAll('p')[index].style.lineHeight="25px"
        
    // }
    // }
    // function largerLineHeight(){
    //     for (let index = 0; index < document.querySelectorAll('p').length; index++) {
    //         document.querySelectorAll('p')[index].style.lineHeight="35px"
    // }
    // }
    // function defaultFont(){
    //     for (let index = 0; index < document.querySelectorAll('p').length; index++) {
    //         document.querySelectorAll('p')[index].style.fontFamily="initial";
    //     }
    // }
    // function courierNewFont(){
    //     for (let index = 0; index < document.querySelectorAll('p').length; index++) {
    //         document.querySelectorAll('p')[index].style.fontFamily="'Courier New', Courier, monospace";
    // }
    // }
    // function monospaceFont(){
    //     for (let index = 0; index < document.querySelectorAll('p').length; index++) {
    //         document.querySelectorAll('p')[index].style.fontFamily="monospace";
    //     }
    // }
}
