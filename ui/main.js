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

button.onclick = function(){
    

    //Create a request object 
    var request = new XMLHttpRequest();
    
    
    //capture the response in a variable
    
    request.onreadystatechange = function(){
        if(request.readyState == XMLHttpRequest.DONE){
            //Take some action
            if(request.status==200){
                
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
                
            }
         }
        //not done
    };
    
    //make the request
    
    request.open('GET','http://ashishpahwa7.imad.hasura-app.io/counter',true);
    request.send(null);

};


//submit name

var nameInput = document.getElementById("name");
//var name = nameInput.value;

var submit = document.getElementById("submit_btn");

submit.onclick = function(){
    
    //make a request to server and send the name
    //capture list of names and render it A list
    
    var names = ['asdsad','dsfdsfd','sdfdsfdsf','sdfdsf'];
    var list = '';
    
    for(var i=0;i<names.length;i++){
        
        list  += '<li>'+ names[i] + '</li>';
    }
    
    var ul = document.getElementById('namelist');
    ul.innerHTML=list;
    
};


