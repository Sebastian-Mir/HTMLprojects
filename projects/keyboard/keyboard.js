/*function for menu display */
const displayMenu = () => {
    /*Obtain the navigation bar, body of the page and the Icon to display them*/
    const navBar = document.getElementsByTagName("nav");
    const article = document.getElementsByTagName("article");
    const navIcon = document.getElementsByClassName("nav-bar-icon");
    /*if the nav bar is not displayed: 
        We increase its width, 
        Decrease the body width (we also use a transition just for fun)
        Rotate the display Icon with an animation
    else (nav bar is displayed)
        hide the nav bar
        open width of the body = 100%
        rotate the nav bar icon
        */
    if(window.getComputedStyle(navBar[0]).display == "none"){
        article[0].style.width = "79%";
        article[0].style.transition = "width 1s";
        navBar[0].style.display = "block";
        navIcon[0].style.transform = "rotate(90deg)";
        navIcon[0].style.transitionDuration = "1s";
    } else {
        article[0].style.width = "100%";
        article[0].style.transition = "width 1s";
        navBar[0].style.display = "none";
        navIcon[0].style.transform = "rotate(0deg)";
        navIcon[0].style.transitionDuration = "1s";
    }
};

//Variables for canvas
let canvas, context;
let snakeFood; //variable for the food object
let score = 0;
const tagScore = document.getElementById('score');
const tagDirection = document.getElementById('direction');
const btnStart = document.getElementById('btn-start-game');
    /**Functions for canvas
     * get the canvas from the HTML
     * set the canvas context to 2D
     * green style to paint the snake and the food
     * paint the initial snake
     * initialize the Food object and coordinates
     * initiate the snake game 
    */
$(document).ready(function() {
    canvas = document.getElementById('canvasOutput');
    context = canvas.getContext('2d');
    context.fillStyle = '#009900';
    drawSnake();
    snakeFood = new Food();
    snakeFood.setCoordinates();
    tagScore.innerHTML = score.toString();
    setInterval(moveSnake, 500);
    
});

const snake = {
    /**Snake object
     * X and Y coordinates for the canvas
     * initial default direction of snake movement = right
     * methods:
     * reset the game
     * move the snake towards direction selected */
    bodyX : [40,30,20,10,0],
    bodyY : [ 0, 0, 0, 0, 0],
    direction : "Right",
    resetSnake : function() {
        this.bodyX = [40,30,20,10,0];
        this.bodyY = [ 0, 0, 0, 0, 0];
        this.direction = "Right";
        tagDirection.innerHTML = "&#9193;"
        score = 0;
        tagScore.innerHTML = score.toString();
        
    },
    moveHead : function() {
        //console.log("Current length = ", this.currentLength);
        console.log();        
        for(let move = this.bodyX.length-1; move > 0; move--){
            //moves the x position
            this.bodyX[move] = this.bodyX[move-1]; 

            //move the y position
            this.bodyY[move] = this.bodyY[move-1]; 
        }
        
        
        switch (snake.direction) {
            case 'Left':
                snake.bodyX[0] -= 10;
                if(snake.bodyX[0] < 0) snake.bodyX[0] = 190;            
                break;
    
            case 'Right':            
                snake.bodyX[0] += 10;
                if(snake.bodyX[0] > 190) snake.bodyX[0] = 0;            
                break;
    
            case 'Up':            
                snake.bodyY[0] -= 10;
                if(snake.bodyY[0] < 0) snake.bodyY[0] = 190;            
                break;
    
            case 'Down':        
                snake.bodyY[0] += 10;
                if(snake.bodyY[0] > 190) snake.bodyY[0] = 0;
                break;
    
            default:
                break;
        };
    }
};

class Food {
    /**Food  class*/
    constructor(){
        this.x = 200;
        this.y = 200;
    }
    /**method:
     * setCoordinates initializes a new food when the snakes eates the previous one
     *  and paints the Food in the canvas. 
     * It also makes sure that the food is not on top of the current snake
     */
    setCoordinates(){
        this.x = Math.floor(Math.random()*19 + 1) * 10;
        this.y = Math.floor(Math.random()*19 + 1) * 10;
        //console.log("x = ", this.x, ", y = ", this.y);
        for(let bodyLen = 0; bodyLen < snake.bodyX.length; bodyLen++){
            if(this.x == snake.bodyX[bodyLen]) {
                if(this.y == snake.bodyY[bodyLen]){
                    console.log("Coordinates inside of the snake, try again");
                    this.setCoordinates();
                }
            }
        }
        context.fillRect(this.x, this.y, 10, 10);
    }
};

document.addEventListener('keydown', function(event) {
    //determines the next moving direction of the square
    //when the player uses a directional key (up, down, left or right)
    //but it doesn't draw anything
    switch (event.key) {
        case 'ArrowLeft':
            snake.direction = 'Left';
            tagDirection.innerHTML = "&#9194;"
            break;
        case 'ArrowRight':
            snake.direction = 'Right';
            tagDirection.innerHTML = "&#9193;"
            break;
        case 'ArrowUp':
            snake.direction = 'Up';
            tagDirection.innerHTML = "&#9195;"
            break;
        case 'ArrowDown':
            snake.direction = 'Down';
            tagDirection.innerHTML = "&#9196;"
            break;
        default:
            break;
    };
    
});

const moveSnake = () => {
    //moves the snake
    //depending on the interval set above in the ready function

    //clearCanvas deletes the whole snake
    //because this process is fast, the user cannot see it
    clearCanvas();

    //moveHead calculates the next position of the head
    snake.moveHead();
    
    //evaluate if the head position touches the food
    if(snake.bodyX[0] == snakeFood.x) { //evaluate head and food X
        //there is no point on evaluating also Y if X is not a match
        //evaluate Y head and food position
        if(snake.bodyY[0] == snakeFood.y){
            //the head is eating the food
            //add a new element to the tail of the snake
            snake.bodyX.push(0); /////////////////
            snake.bodyY.push(0);
            //temporarily is set equal to the last element of the snake body
            //it will change in the next cycle
            snake.bodyX[snake.bodyX.length-1] = snake.bodyX[snake.bodyX.length-2];
            snake.bodyY[snake.bodyY.length-1] = snake.bodyY[snake.bodyY.length-2];

            //obtains the new coordinates of the food 
            //(also verifies that the food is not on top of the snake's body)
            snakeFood.setCoordinates();
            //updates the score
            score += 1;
            tagScore.innerHTML = score.toString();            
        }
    }
    
    //check if new head position is already part of the snake
    //(End of the game)
    for(let bodyLen = 1; bodyLen < snake.bodyX.length; bodyLen++){
        if(snake.bodyX[0] == snake.bodyX[bodyLen]) {
            if(snake.bodyY[0] == snake.bodyY[bodyLen]){
                
                snake.resetSnake();          
            }
        }
    }
    //drawSnake draw the new calculated snake in the canvas
    //to make it look like its moving in the direction of the keys
    //after the body is modified or if the game continues
    drawSnake();
    

};

const clearCanvas = () => {
    //Paints the snake back to gray (background color in the CSS document)
    for(let max = 0; max < snake.bodyX.length; max++){
        context.fillStyle = "rgb(207, 207, 207)";
        context.fillRect(snake.bodyX[max], snake.bodyY[max], 10, 10);
        context.fillStyle = '#009900';
    }  
};

const drawSnake = () => {
    //Paints the snake in green when the movement calculations are done
    for(let max = 0; max < snake.bodyX.length; max++){
        
        context.fillRect(snake.bodyX[max], snake.bodyY[max], 10, 10);
    }
};