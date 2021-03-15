const selectBox = document.getElementById("state")
const states =["AC","AL","AM","BA","CE","DF","ES","GO","MA","MS","e o resto..."]
for(let index = 0 ; index < states.length; index += 1){
    let estado = document.createElement('option');
    estado.innerText = states[index];
    selectBox.appendChild(estado); 
}