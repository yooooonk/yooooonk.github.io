const room = document.querySelector('.room');
const cube = document.querySelector('.cube');
const title = document.querySelector('.title-word-wrap');
const scrollBar = document.querySelector('.scroll-bar');
const toTop = document.querySelector('.to-top');

let scrollState = false;
let page = 1;
let mousePos = {x:0, y:0}
let screenMode = 'full'


window.addEventListener('scroll',(e)=>{
    clearTimeout(scrollState);
    
    const scrollPer = pageYOffset / maxScrollValue * 100;
    page = Math.floor(scrollPer/30);
    if(screenMode==='mobile'){
        slideScreen(scrollPer)
    }else{
        rollCube(); 
        paintScrollBar(scrollPer);
    }
    
    
});

const slideScreen = () =>{
    console.log(page)
}

const rollCube = ()=>{            
    cube.style.transform = `rotateY(${-40*page}deg)`    
}

const paintScrollBar = (scrollPer)=>{
    const modePer = screenMode==='full'? 2 : 1;
    scrollBar.style.width = `${scrollPer/modePer}%`
}

window.addEventListener('resize',(e)=>{
    const width = window.innerWidth;

    if(width > 760){
        screenMode = 'full'
    }

    if(width >= 480 && width <= 760){
        screenMode = 'tablet'
    }

    if(width<= 480){
        screenMode = 'mobile'
    }

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
    
    room.style.transform = `rotateY(${mousePos.x*15}deg) rotateX(${mousePos.y*15}deg)`        
}

toTop.addEventListener('click',(e)=>{
    window.scrollTo(0,0)
})