//when clicking any crystal it should add to previous result until it equals total score
var randomResult;
var lost=0;
var win=0;
var counter = 0;

var startGame=function (){
    $(".crystals").empty();
    var images =[
        'assets/images/green.png',
        'assets/images/blue.png',
        'assets/images/yellow.png',
        'assets/images/purple.png'];
//random result is generated between 40-99
randomResult = Math.floor(Math.random()*59)+40;

//random result is displayed on page
$("#result").html('Random Value: '+ randomResult);

//each of the 4 crystals has random number generated between 1-12
for(var i=0; i<4; i++){
    var random = Math.floor(Math.random()*11)+1;
    
    var crystal=$("<div>");
    crystal.attr({
        "class": 'crystal', "data-random": random});
        crystal.css({"background-images":"url('"+ images[i] +"')",
        "background-size":"cover"
    });
    $(".crystals").append(crystal);
}
    $("#counter").html( "Counter: "+ counter);

}

startGame ();

//when clicking any crystal it should add to previous result until it equals total score

$(document).on('click', ".crystal", function(){
    
    var number = parseInt($(this).attr('data-random'));
    counter += number;
    $("#counter").html("Counter: " + counter);
    console.log(counter);

//if it is greater than total score then start over and increment a loss to loss counter
//if it is equal then start over and increment win to win counter
   if (counter > randomResult ){
    //    console.log("You Lost!");
        lost++;
        $("#lost").html("You lost: "+ lost);
        counter =0;
        
        startGame();
   }
   else if(counter === randomResult){
    //    console.log("You Win!");
        win++;
        $("#win").html("You won: "+ win);
        counter=0;
        
        startGame();
   }

});


