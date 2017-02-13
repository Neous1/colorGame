var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");

var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset"); 

resetButton.addEventListener("click", function(){
    //generate all new colors
    colors = generateRandomColors(6);
    // pick a new random color from arr
    pickedColor = pickColor();
    //change colorDisplay to match pickedColor
    colorDisplay.textContent = pickedColor;
    //change color of squares
    for (var i= 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
    }
    h1.style.background ="#232323";
});


colorDisplay.textContent = pickedColor;



// loop thru the squares to assign a color from colors[]
for (var i = 0; i < squares.length; i++){
    // add startup color 
    squares[i].style.background = colors[i];
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

