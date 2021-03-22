var canvas=document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var empty=9;
var moves=-1;
function shuffle(array) {
	  var currentIndex = array.length, temporaryValue, randomIndex;

	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {

	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    // And swap it with the current element.
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }

	  return array;
	}
var ar=[1,2,3,4,5,6,7,8,0];
im=shuffle([1,2,3,4,5,6,7,8,0]);

for(var i=0;i<=8;i++){
	if(im[i]==0)
		empty=i+1;
}

var restart=0;
function won(){
	ctx.clearRect(300,300,150,150);
	var img=document.getElementById("puzz9");
	var pat=ctx.createPattern(img,"repeat");
	ctx.fillStyle=pat;
	ctx.fillRect(300,300,150,150);
	m=document.getElementById("message");
	m.innerHTML="You won the game in "+moves.toString() +" moves";
	au=document.getElementById("cheers");
	au.play();
	restart=1;
	moves=-1;

}

function draw(){
	moves++;
	mov=document.getElementById("moves");
	mov.innerHTML="MOVES: "+ moves.toString();
	m=document.getElementById("message");
	m.innerHTML="";
  var t;
  t=0;
  if(restart==1){
	
	  im=shuffle([1,2,3,4,5,6,7,8,0]);
		for(var i=0;i<=8;i++){
			if(im[i]==0)
				empty=i+1;
			
				
		}
		
		console.log(empty);
		
	 ctx.clearRect(0,0,450,450);
	  restart=0;
  }
	for(var i=0;i<9;i++){
		if(im[i]!=ar[i])
			t=1;	
	}
	console.log(im);
	console.log(ar);
	
	for(var i=0;i<3;i++){
    	for(var j=0;j<3;j++){
    		   component(i,j);    		
    	}
    }
	
	console.log(t);
	
	if(t==0){
		console.log("one more");
		won();
	}
	
}

function component(x, y) {
    
    var text="puzz";
    z=x+3*y;
    z=im[z];
    text=text+z.toString();
    if(z!=0)
    {
    	var img=document.getElementById(text);
    	var pat=ctx.createPattern(img,"repeat");
    	ctx.fillStyle=pat;
    }
    
    else
    {
    	ctx.fillStyle="white";
    }
    
    ctx.fillRect(150*x,150*y,150,150);    
}

function moveup() {
	ctx.clearRect(0,0,450,450);
	if(restart==1)
		{
		draw();
		return;
		}
    if(empty==9||empty==7||empty==8){
    	au=document.getElementById("no");
    	au.play();
    	moves--;
    	draw();
    } 
    else{
    	au=document.getElementById("cut");
    	au.play();
    	text="puzz";
    	var curr=empty;
    	empty=empty+3;
    	var next=empty;
        im[curr-1]=im[next-1];
        im[next-1]=0;
        draw();
    	
    }
    console.log(empty);
}

function movedown() {
	ctx.clearRect(0,0,450,450);
	if(restart==1)
	{
	
	draw();
	return;
	}
	if(empty==1||empty==2||empty==3) {
		au=document.getElementById("no");
    	au.play();
		moves--;
		draw();
    }
    else{
    	au=document.getElementById("cut");
    	au.play();
    	text="puzz";
    	var curr=empty;
    	empty=empty-3;
    	var next=empty;
        im[curr-1]=im[next-1];
        im[next-1]=0;
        draw();
        
    }
    
    console.log(empty);
    
}

function moveleft() {
	ctx.clearRect(0,0,450,450);
	
	if(restart==1)
	{
	
	draw();
	return;
	}
	
	if(empty==6||empty==9||empty==3) {
		au=document.getElementById("no");
    	au.play();
		moves--;  
		draw();
	    }
	    else{
	    	au=document.getElementById("cut");
	    	au.play();
	    	text="puzz";
	    	var curr=empty;
	    	empty=empty+1;
	    	var next=empty;
	        im[curr-1]=im[next-1];
	        im[next-1]=0;
	        draw();
	    	
	  
	    }
	  console.log(empty);
}

function moveright() {
	ctx.clearRect(0,0,450,450);
	if(restart==1)
	{
	moves--;
	draw();
	return;
	}
	  if(empty==1||empty==4||empty==7) {
		  au=document.getElementById("no");
	    	au.play();
		  moves--;
		  draw();
	    }
	    else{
	    	au=document.getElementById("cut");
	    	au.play();
	    	text="puzz";
	    	var curr=empty;
	    	empty=empty-1;
	    	var next=empty;
	        im[curr-1]=im[next-1];
	        im[next-1]=0;
	        draw();
	    }console.log(empty);
	
	  }
	  
window.addEventListener('keydown', function (e) {
    key = e.keyCode;
    if(key==37){
    	e.preventDefault();
    	moveleft();
    }
    if(key==38){
    	e.preventDefault();
    	moveup();
    }
    if(key==39){
    	e.preventDefault();
    	moveright();
    }
    if(key==40){
    	e.preventDefault();
    	movedown();
    }
	if(key==83){
		e.preventDefault();
		start();

		timer();
	}
    
});

function start(){
draw();
}
ctx.font = "30px Arial";
ctx.fillText("Hit S to start the game",80,210);

function timer () {
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}
}
