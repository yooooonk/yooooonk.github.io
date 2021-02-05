const room = document.querySelector('.room');
const cube = document.querySelector('.cube');
const title = document.querySelector('.title-word-wrap');
const scrollBar = document.querySelector('.scroll-bar');
const toTop = document.querySelector('.to-top');

let scrollState = false;
let lastPage = 1;
let mousePos = {x:0, y:0}

window.addEventListener('scroll',(e)=>{
    clearTimeout(scrollState);
    
    const scrollPer = pageYOffset / maxScrollValue * 100;
    const page = Math.floor(scrollPer/30);

    rollCube(page); 
    paintBar(scrollPer);
    
});

const rollCube = (page)=>{            
    cube.style.transform = `rotateX(${-90*page}deg)`    
}

const paintBar = (scrollPer)=>{
    
    scrollBar.style.width = `${scrollPer/2}%`
}

window.addEventListener('resize',()=>{
    setMaxScrollValue();    
});

const setMaxScrollValue = ()=>{
    maxScrollValue = document.body.offsetHeight - window.innerHeight;   
}

setMaxScrollValue();

window.addEventListener('mousemove',(e)=>{
    moveScreen(e);
});

const moveScreen = (e)=>{
    
    mousePos.x = -1 + (e.clientX/window.innerWidth)*2
    mousePos.y = 1 - (e.clientY/window.innerHeight)*2;
    
    room.style.transform = `rotateX(${mousePos.y*15}deg) rotateY(${mousePos.x*15}deg)`        
}

toTop.addEventListener('click',(e)=>{
    window.scrollTo(0,0)
})