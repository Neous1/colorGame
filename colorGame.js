var numSquares = 6
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset"); 
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
    //modeButtons event listeners
    setupModeButtons();
    // loop thru the squares to assign a color from colors[]
    setupSquares()
    reset();

}

function setupModeButtons(){
    
    for (var i =0; i<modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            //remove the selected class from all buttons.
            modeButtons[0].classList.remove("selected")
            modeButtons[1].classList.remove("selected")
            //add the selected class to the selected button
            this.classList.add("selected");
            //figure out how many square to show
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();        
        });
     }
}
function setupSquares(){
    
    for (var i = 0; i < squares.length; i++){
        // add click listeners to squares
        squares[i].addEventListener("click", function(){
            //capture color of clicked square
            var clickedColor = this.style.background;
            // compare color to pickedColor
            console.log(clickedColor, pickedColor);
            if (clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!" 
                resetButton.textContent = "Play Again?"
                changeColors(clickedColor)
                h1.style.background = clickedColor
            }
            else{
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again"
            }
        });
    }
}
function reset(){
    //generate all new colors
    colors = generateRandomColors(numSquares);
    // pick a new random color from arr
    pickedColor = pickColor();
    //change colorDisplay to match pickedColor
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    //change color of squares
    for (var i= 0; i < squares.length; i++){
        squares[i].style.display ="block"; // this line ensures that all 6 colors are displayed before then easy mode romoves 3.
        if (colors[i]){
            squares[i].style.background = colors[i];            
        }
        else{
            squares[i].style.display ="none";
        }
    }
    h1.style.background ="steelblue";
}
resetButton.addEventListener("click", function(){
    reset()
});


function changeColors(color){
    //loop thru all squares
    for (var i = 0; i < squares.length; i++){
        squares[i].style.background = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random()* colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr = [];
    //add num random colors to array
    for (var i = 0; i < num; i++){
        //get random color and push into arr
        arr.push(randomColor())
    }
    // return that array
    return arr;
}

function randomColor(){
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256)/*256 is not inclusive*/
    //pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256)
    //pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")"; 
}

