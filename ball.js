//we can select the canvas with this canvas variable;
var canvas = document.querySelector('canvas')
//we can draw 2d shapes using the variable c;
var c = canvas.getContext('2d')
//sets the canvas height and width to the browser height and width
canvas.width = innerWidth
canvas.height = innerHeight
//the position of the mouse is the width of the browser/2, and the height of the browser/2
var mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}
//this is an array with a list of colors!!
var colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']
//the gravity of is set to 1 in this variable called gravity;
var graviti =1;
//the friction is set to 0,99 so it be visible but not so much
var friction =0.99;
// this is a list of events which can make the mouse move to a new place on the browser whenever the mouse position is updated;
addEventListener('mousemove', event => {
    mouse.x = event.clientX
    mouse.y = event.clientY
})
//this event is helping to resize the canvas or browser screen whenever it is updated;
//init is the nativ javascript function which updates the the project/website every time;
addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight

    init()
})
	//we can draw diffrent objects on the canvas if we want to draw a ball then we can do so using the function below;
	//we know that the balls position is the x and y axes and we know that the radius has a big rule when it comes to the size of the ball and dy is the gravity of the ball and the color is the array we created earlyer;
	function Ball(x, y,dy, radius, color) {
    this.x = x
    this.y = y
    this.dy=dy;
    this.radius = radius
    this.color = color
}
// this is telling the computer to think if the y axis and the radius of the ball is bigger than the height of the canvas then make the gravity of the ball to negativ number and multiply it with the friction, if the the height of the y axis and the radius of the ball is less than the cavas height then make the gravity dy of the ball more or equal to the the gravity of the ball;
	// here we are going to make the y axis bigger or equal to the gravity of our ball, and we are making a function called this.draw and it is a part of the Ball function we have created earlyer;
   Object.prototype.update = function() {
    if(this.y+this.radius>canvas.height){
    this.dy=-this.dy*friction;
    }else{
    this.dy +=graviti;    
    }
    this.y +=this.dy;
    this.draw()
}
    
	// this function is drawing the ball;
	Object.prototype.draw = function() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
    c.closePath()
}
// we are making a variable called objects and a variable called ball;
let objects
var ball;
// we are creating a fuction which updateds the canvas we have created and it also contain the object and the ball variables and it tells that the objecs variable is an array and it tells also that the ball variable is a child of the Ball function which has its own position and size and it is putting the ball on the canvas with the;  //for (let i = 0; i < 400; i++) {
   // } function;
function init() {
    objects = []
    ball=new Ball(canvas.width/2,canvas.height/2,2,30,'red');

    for (let i = 0; i < 400; i++) {
        // objects.push();
    }
}
// we are animating the ball using the AnimationFrame which is a part of the function animate! but we can name the fuction anything but we also need to change to our own name the animation frame;
// Animation Loop
//the c.clearRect is deleting the old layers and placing new once all the time;
// we are going to update our ball on every move
// now it is time to excute our two functions so they can work!!
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)

  ball.update();
    // objects.forEach(object => {
    //  object.update();
    // });
}

init()
animate()









//created by: MR.Hussein Abdul-Ameer
