// Game Constants And Variables
// console.log("Hello")
let inputDir={x:0,y:0};
let speed=10;
let score=0;
let lastPaintTime=0;
// console.log("Hello2")
let snakeArr=[{
    x:13,y:15
}];
// console.log("Hello3")
food={x:5,y:8};

// console.log("Hello4")
// Game functions
function main(ctime){
    window.requestAnimationFrame(main);
    // console.log(ctime);
    if((ctime-lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime=ctime;
    gameEngine();   
}

function isCollide(snake){
    for(let i=1;i<snakeArr.length;i++){
        if(snake[i].x===snake[0].x && snake[i].y===snake[0].y){
            return true;
        }
    }

    if(snake[0].x>=18||snake[0].x<=0||snake[0].y >= 18 || snake[0].y <=0){
        return true;
    }
    return false;
}

function gameEngine(){
    //Part 1 : updating the snake array and food

if(isCollide(snakeArr)){
    inputDir={x:0,y:0};
    alert("Game Over");
    snakeArr[{x:13,y:15}];
    // score=0;
}

    // if you have eaten the food,increment the score and regenrate the size
    if(snakeArr[0].y===food.y && snakeArr[0].x===food.x){
        // score+=1;
        snakeArr.unshift({x:snakeArr[0].x + inputDir.x,y:snakeArr[0].y+inputDir.y});
            let a=2;
            let b=16;
            food = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b-a)* Math.random())}
        
    }


    // moving of snake
    for (let i = snakeArr.length - 2; i>=0; i--) { 
        snakeArr[i+1] = {...snakeArr[i]};
    }

    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;


// Part 2:Render the snake and food
board.innerHTML="";
snakeArr.forEach((e,index)=>{
    snakeElement=document.createElement('div');
    snakeElement.style.gridRowStart=e.y;
    snakeElement.style.gridColumnStart=e.x;

    if(index==0){
        snakeElement.classList.add("head");

    }
    else{
    snakeElement.classList.add('snake');
    }
    board.appendChild(snakeElement);
})

    foodElement=document.createElement('div');
    foodElement.style.gridColumnStart=food.x;
    foodElement.style.gridRowStart=food.y;
    foodElement.classList.add('food');
    board.appendChild(foodElement);

}
// Main logic starts

window.requestAnimationFrame(main);
// console.log("Hello5")
window.addEventListener('keydown',e=>{
    inputDir={x:0,y:1};
    // console.log("H1")
    switch (e.key){
        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x=0;
            inputDir.y=-1;
            break;
        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x=0;
            inputDir.y=1;
            break;
        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x=-1;
            inputDir.y=0
            break;
        case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x=1;
            inputDir.y=0;
            break;

        }
    });

