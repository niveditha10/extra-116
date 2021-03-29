
eye_x=0;
eye_y=0;

function preload() {
hat=loadImage("hat.png");
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.position(500,230)
    video=createCapture(VIDEO);
  video.size(300,300);
  video.hide();

posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses);
}
function modelLoaded()
{
  console.log("posenet loaded");
}

function gotPoses(results){
  if(results.length>0){
    console.log(results);
    eye_x=results[0].pose.rightEye.x-70;
    eye_y=results[0].pose.rightEye.y-190;
  }
}

function draw() {
image(video,0,0,300,300);
image(hat,eye_x,eye_y,170,150);
}

function take_snapshot(){    
  save('myFilterImage.png');
}