const cube = document.querySelector('.cube');

let cubeScroll = 1;
let scrollState = false;
let lastScroll = 0;

window.addEventListener('scroll',(e)=>{
    clearTimeout(scrollState);
    
    const scrollPer = pageYOffset / maxScrollValue * 100;
    rollCube(scrollPer);
    
});

const rollCube = (scrollPer)=>{
    
    console.log(scrollPer)
    
    cube.style.transform = `rotateX(${-90*cubeScroll}deg)`
}

window.addEventListener('resize',()=>{
    setMaxScrollValue();    
});

const setMaxScrollValue = ()=>{
    maxScrollValue = document.body.offsetHeight - window.innerHeight;   
}

setMaxScrollValue();