const score=document.querySelector('.score');
const startScreen=document.querySelector('.startScreen');
const gameArea=document.querySelector('.gameArea');
/*console.log(gameArea);*/
startScreen.addEventListener('click',start);
let player={speed:5,score:0};
let keys ={ArrowUp:false,ArrowDown:false,ArrowLeft:false,ArrowRight:false}

document.addEventListener('keydown',keyDown);
document.addEventListener('keyup',keyUp);

function keyUp(e){
    e.preventDefault();
    keys[e.key]=false;

}

function keyDown(e){
    e.preventDefault();
    keys[e.key]=true;
}

function isCollide(a,b){
    aRect=a.getBoundingClientRect();
    bRect=b.getBoundingClientRect();
    return !((aRect.bottom<bRect.top)||(aRect.top>bRect.bottom)||(aRect.right<bRect.left)||(aRect.left>bRect.right))
}

function moveLines(){
    let lines=document.querySelectorAll('.lines');
    lines.forEach(function(item){
        if(item.y >=650){
            item.y-=740;
        }
        item.y+=player.speed;
        item.style.top=item.y+"px";
    })
}

function endGame(){
    player.start=false;
    startScreen.classList.remove('hide');
    startScreen.innerHTML="<b>Game Over</b> <br> Final score:"+player.score+" "+"<br><b>Press again to restart</b>";
}

function moveEnemy(car){

    let enemy=document.querySelectorAll('.enemy');
    enemy.forEach(function(item){

        if(isCollide(car,item)){
            console.log("Bang!");
            endGame();
        }

    if(item.y >=750){
        item.y=-300;
        item.style.left=Math.floor(Math.random()*350)+"px";
    }
    item.y+=player.speed;
    item.style.top=item.y+"px";
})
}

function gamePlay(){
    console.log("Let's Go");
    let car=document.querySelector('.car');
    let road=gameArea.getBoundingClientRect();
    if(player.start) {
        moveLines();
        moveEnemy(car);
    }
}
if(keys.ArrowUp && player.y>(road.top+70)){
    player.y-=player.speed
}
if(keys.ArrowDown && player.y<(road.bottom-85)){
    player.y+=player.speed
}

