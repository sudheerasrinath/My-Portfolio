const score=document.querySelector('.score');
const startScreen=document.querySelector('.startScreen');
const gameArea=document.querySelector('.gameArea');
/*console.log(gameArea);*/
startScreen.addEventListener('click',start);
let player={speed:5,score:0};
let keys ={ArrowUp:false,ArrowDown:false,ArrowLeft:false,ArrowRight:false}