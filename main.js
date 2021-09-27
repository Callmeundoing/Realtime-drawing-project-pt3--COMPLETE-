noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(750, 700);
    video.position(100, 100);

    canvas = createCanvas(750, 700);
    canvas.position(900, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}


function gotPoses(results)
{
  if(results.length > 0)
  {
   
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x
    difference = floor(leftWristX - rightWristX)

  }
}

function draw() {
background('#969A97');

textSize(difference);
fill('FFE787')
text('Hasan', 50, 400);
}


