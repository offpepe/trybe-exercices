window.onload=function(){
var darkModeToggle=false;
let main=document.getElementsByTagName("main")
let darkModeButtom = document.getElementById("darkModeButtom")
darkModeButtom.addEventListener("click",darkMode);
console.log("onload working");
function darkMode(){
    if (darkModeToggle===false){
        console.log("darkmode function geted")
        document.getElementById("darkModeImg").style.filter="0%";
        document.body.style.backgroundColor="black";
        document.querySelector("header").style.backgroundColor="white";
        document.querySelectorAll(".titleHeader").style.color="black"
        document.querySelectorAll("p").style.color="white";
        darkModeToggle=true;
        
    }
}
}





