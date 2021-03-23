let clickCount = 0
localStorage.setItem('clickCount',clickCount)
const bb = document.getElementById("b");

bb.addEventListener("click", (Event) => {
    clickCount+=1;
    localStorage.setItem('clickCount',clickCount)
    document.getElementById("clickShower").innerText=localStorage.getItem('clickCount')
})
