var enemyCar=[];

//difficulty and timer variables
var speedLv=10;
var difficulty=1;
var timerPassed=0;
var timePassed=0;

//road pictures
var picNum=0;
var roadPic=new Array("./img/road1.jpg","./img/road2.jpg","./img/road3.jpg","./img/road4.jpg","./img/road5.jpg");

//player car object
var myCar={
	x:500,
	y:600,
	speed:10
}

//police car variables
var carWidth=40;
var carHeight=100;
var speed=30;

var tableOn=0;

//start the timer
var gameTimer=setInterval(myTimer,100);
var pushX=Math.floor(Math.random()*700)+100;
var pushY=20;
var pushArray=[pushX,pushY];
enemyCar.push(pushArray);

//music
 var audio = document.createElement("AUDIO");
 audio.src="music/crash.mp3";
 
//timer event
function myTimer(){
	timerPassed++;
	if (timerPassed%10==0){
		timePassed++;
		//win condition
		if (timePassed>=60){
			alert("Congrats, you have made your escape!");
			location.href="win.html";
		}
		
		//change difficulty
		if (timerPassed%50==0){
			if (speedLv>1){
				difficulty++;
				speedLv--;
			}else if (speedLv==1){
				difficulty="Max Level";
				speedLv=0.5;
			}
		}
		document.getElementById("displayTimer").innerHTML=timePassed;
		document.getElementById("displayDiff").innerHTML=difficulty;
	}

	//random spawn enemy cars
	if (timerPassed%(speedLv*10)==0){
		var pushX=Math.floor(Math.random()*700)+100;
		var pushY=20;
		var pushArray=[pushX,pushY];
		enemyCar.push(pushArray);
	}
	
	//make road moving and call drawing function
	if (timerPassed%speedLv==0){
		picNum++;
		if (picNum>4)	picNum=0;
		moveEnemy();
		myRoad();
	}
}

//drawing everything on canvas
function myRoad(){
	var canvas=document.getElementById("road");
	var ctx=canvas.getContext("2d");
	
	var bkGround =new Image();
	bkGround.src=roadPic[picNum];
	
	ctx.drawImage(bkGround,0,0);
	drawCar(myCar.x,myCar.y);
	for (var i=0;i<enemyCar.length;i++)	drawEnemy(enemyCar[i][0],enemyCar[i][1]);
	
	carHit();
}

//drawing cars
function drawCar(x,y){
	var canvas=document.getElementById("road");
	var ctx=canvas.getContext("2d");
    var car=new Image();
    car.src="img/car.png";
	ctx.drawImage(car,x,y,40,100);
}

//drawing enemy cars
function drawEnemy(x,y){
	var canvas=document.getElementById("road");
	var ctx=canvas.getContext("2d");
    var car=new Image();
    car.src="img/EnemyCar.png";
	ctx.drawImage(car,x,y,carWidth,carHeight);
}

//use to move cars
function up(){
	myCar.y-=myCar.speed;
	myRoad();
}
function down(){
	myCar.y+=myCar.speed;
	myRoad();
}
function left(){
	myCar.x-=myCar.speed;
	myRoad();
}
function right(){
	myCar.x+=myCar.speed;
	myRoad();
}


window.addEventListener("keydown",moveObj);
//key input
function moveObj(){
	if(event.keyCode==38){
		if ((myCar.y-myCar.speed)>0) up();
	}else if (event.keyCode==37){
		if ((myCar.x-myCar.speed)>100) left();
	}else if (event.keyCode==40){
		if ((myCar.y+myCar.speed)<700) down();
	}else if(event.keyCode==39){
		if ((myCar.x+myCar.speed)<860) right();
	}else if (event.keyCode==82) restart();
}

//determine if car hits
function carHit(){
	for (var i=0;i<enemyCar.length;i++){
		if ((enemyCar[i][0]<=myCar.x) && (myCar.x<=enemyCar[i][0]+carWidth)){
			if ((enemyCar[i][1]<=myCar.y) && (myCar.y<=enemyCar[i][1]+carHeight))	hit();
			else if ((enemyCar[i][1]<=(myCar.y+100)) && ((myCar.y+100)<=enemyCar[i][1]+carHeight)) hit();
		}else if ((enemyCar[i][0]<=(myCar.x+40)) && ((myCar.x+40)<=enemyCar[i][0]+carWidth)){
			if ((enemyCar[i][1]<=myCar.y) && (myCar.y<=enemyCar[i][1]+carHeight))	hit();
			else if ((enemyCar[i][1]<=(myCar.y+100)) && ((myCar.y+100)<=enemyCar[i][1]+carHeight)) hit();
		}
	}
}

//use to move enemy cars
function moveEnemy(){
	for (var i=0;i<enemyCar.length;i++){
		enemyCar[i][1]+=speed;
		if (enemyCar[i][1]>=800) enemyCar.splice(i,1);
		var leftOrRight=Math.random();
		if ((leftOrRight>=0.5)&&((enemyCar[i][0]+(speed/2))<=890)) enemyCar[i][0]+=(speed/2);
		else if ((leftOrRight<0.5)&&((enemyCar[i][0]-(speed/2))>=110)) enemyCar[i][0]-=(speed/2);
	}
}

//restart the game
function restart(){
	clearInterval(gameTimer);
	
	//pop enemies
	while (enemyCar.length !=0) enemyCar.pop();
	
	//reset difficulty and timer values
	speedLv=10;
	difficulty=1;
	timerPassed=0;
	timePassed=0;
	picNum=0;
	
	//reset player car object
	myCar.x=500;
	myCar.y=600;
	myCar.speed=10;
	
	//reset enemy values
	carWidth=40;
	carHeight=100;
	speed=30;
	
	//restart timer
	gameTimer=setInterval(myTimer,100);
	var pushX=Math.floor(Math.random()*700)+100;
	var pushY=20;
	var pushArray=[pushX,pushY];
	enemyCar.push(pushArray);
}

//when car hit enemy, bring to game over page
function hit(){
	clearInterval(gameTimer);
	audio.play();
	alert("You have been arrested!/n So close to escape!");
	location.href="End.html";
}

