const room = document.querySelector('.room');
const cube = document.querySelector('.cube');
const title = document.querySelector('.title-word-wrap');


let scrollState = false;
let lastPage = 1;
let mousePos = {x:0, y:0}

window.addEventListener('scroll',(e)=>{
    clearTimeout(scrollState);
    
    const scrollPer = pageYOffset / maxScrollValue * 100;
    const page = Math.floor(scrollPer/30);

    rollCube(page);
    rollTitle(page);
    
});

const rollCube = (page)=>{    
        
    cube.style.transform = `rotateX(${-90*page}deg)`    
}

const rollTitle = (page)=>{
    
    if(lastPage !== page){
        '페이지바뀜'
    }
    title.style.transform = `translateX(-${30*page}vw)`
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
    
    room.style.transform = `rotateX(${mousePos.y*10}deg) rotateY(${mousePos.x*10}deg)`        
}
