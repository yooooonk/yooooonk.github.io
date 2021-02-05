const stage = document.querySelector('.stage');
const house = document.querySelector('.house');

let mousePos = {x:'',y:''}


window.addEventListener('mousemove',(e)=>{
    //moveScreen(e);
});

const moveScreen = (e)=>{
    
    mousePos.x = -1 + (e.clientX/window.innerWidth)*2
    mousePos.y = 1 - (e.clientY/window.innerHeight)*2;
    
    house.style.transform = `rotateX(${mousePos.y*5}deg) rotateY(${mousePos.x*5}deg)`        
}

window.addEventListener('scroll',(e)=>{
    const scrollPer = pageYOffset / maxScrollValue;
    
    //moveMenu(scrollPer);
})

let maxScrollValue = 0;
const moveMenu = (scrollPer)=>{
    const zMove = scrollPer * 500 - 30;
    house.style.transform = `translateZ(${zMove}vw)`
}

window.addEventListener('resize',()=>{
    setMaxScrollValue();
})

const setMaxScrollValue = ()=>{
    maxScrollValue = document.body.offsetHeight - window.innerHeight;   
}

setMaxScrollValue();