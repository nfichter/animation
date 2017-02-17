var c = document.getElementById("cnvs");
var ctx = c.getContext("2d");

var clearCanvas = function() {
    ctx.clearRect(0,0,c.width,c.height);
};

var requestID = 0;

var animateCircle = function() {
    window.cancelAnimationFrame(requestID);
    var color = "rgb("+
  	Math.floor(Math.random()*256)+","+
  	Math.floor(Math.random()*256)+","+
  	Math.floor(Math.random()*256)+")";
    var r = 0;
    var num = 1;
    var drawCircle = function() {
	ctx.fillStyle = color;
	ctx.fillRect(0,0,c.width,c.height);
	ctx.fillStyle = "rgb("+
  	    Math.floor(Math.random()*256)+","+
  	    Math.floor(Math.random()*256)+","+
  	    Math.floor(Math.random()*256)+")";
	ctx.beginPath();
	ctx.arc(c.width/2,c.height/2,r,0,2*Math.PI);
	ctx.stroke();
	ctx.fill();
	r+=num;
	if (r >= c.width/2) {
	    num = -1;
	}
	if (r <= 0) {
	    num = 1;
	}
	requestID = window.requestAnimationFrame(drawCircle);
    };
    drawCircle();
};

var myImg = new Image();
myImg.src = "dvd.png";

imgW = 128;
imgH = 85;

var animateDVD = function() {
    window.cancelAnimationFrame(requestID);
    var color = "rgb("+
  	Math.floor(Math.random()*256)+","+
  	Math.floor(Math.random()*256)+","+
  	Math.floor(Math.random()*256)+")";
    var x = Math.floor(Math.random()*(c.width-imgW+1));
    var y = Math.floor(Math.random()*(c.height-imgH+1));
    var addX = Math.floor(Math.random()*5)+1;
    if (Math.floor(Math.random()*2) == 0) {
	addX *= -1;
    }
    var addY = Math.floor(Math.random()*3)+1;
    if (Math.floor(Math.random()*2) == 0) {
	addY *= -1;
    }
    var showDVD = function() {
	ctx.fillStyle = color;
	ctx.fillRect(0,0,c.width,c.height);
	ctx.drawImage(myImg,x,y);
	x+=addX;
	y+=addY;
	if (x > c.width-imgW || x < 0) {
	    addX *= -1;
	    color = "rgb("+
  		Math.floor(Math.random()*256)+","+
  		Math.floor(Math.random()*256)+","+
  		Math.floor(Math.random()*256)+")";
	}
	if (y > c.height-imgH || y < 0) {
	    addY *= -1;
	    color = "rgb("+
  		Math.floor(Math.random()*256)+","+
  		Math.floor(Math.random()*256)+","+
  		Math.floor(Math.random()*256)+")";
	}
	requestID = window.requestAnimationFrame(showDVD);
    }
    showDVD();
};

var stop = function() {
    window.cancelAnimationFrame(requestID);
};

var crc = document.getElementById("crc");
crc.addEventListener("click",animateCircle);

var dvd = document.getElementById("dvd");
dvd.addEventListener("click",animateDVD);

var stp = document.getElementById("stp");
stp.addEventListener("click",stop);
