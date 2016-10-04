/*
console.log('Loaded!');

//change text of the main-text div
var element = document.getElementById('main-text');
element.innerHTML = "new value";


//move the image
var img = document.getElementById('madi');
marginLeft = 0;
function moveRight(){
    
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft +"px";
}

img.onclick = function(){
    var interval = setInterval(moveRight, 100);
    
};
*/

var button = document.getElementById('counter');
var counter = 0 ;
button.onclick = function(){
    
    //Make a request to counter end point
    
    //capture the response in a variable
    
    
    //render the variable in correct span
    
    counter = counter+ 1;
    
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
    
    
    
};