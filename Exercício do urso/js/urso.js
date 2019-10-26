let cont = 1
let margem_left = 0
let margem_top = 0

setInterval(function(){
    urso = document.getElementById('urso')
    urso.src = `images/chara-${cont}.png`;
    urso.style.marginLeft = margem_left+'%'
    urso.style.marginTop = (margem_top)+'%'
    margem_left+=1
    cont++
    if(margem_left === 100){
        margem_left = -5
        margem_top+=5
    }
    if(cont > 3){
        cont = 1;
    }
}, 90)