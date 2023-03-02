var btn = document.getElementById('BTN');

btn.addEventListener('click', (e) => {
    document.getElementById('btn-wrap').classList.add('move-btn');
    setTimeout(()=>{
        document.getElementById('scene').classList.add('move-plains')
    },1000) 
    setTimeout(()=>{
        document.getElementById('flight').classList.add('fly-plane')
    },3000) 
    setTimeout(()=>{
        document.getElementById('flight').classList.add('hide')
    },5000) 
})