noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(750, 275);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose",gotPoses);
}
function draw (){
    background("#7FFFD4");
}
function modelLoaded(){
    console.log("PoseNet has been integrated!");
}
function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        
    }
}