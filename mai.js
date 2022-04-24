noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(750, 230);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose",gotPoses);
}
function draw (){
    background("#7FFFD4");
    textSize(difference);
    fill("#32CD32");
    text("AKO", 50, 200);
}
function modelLoaded(){
    console.log("PoseNet has been integrated!");
}
function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference =floor(leftWristX - rightWristX);

        console.log("leftWristX = "+leftWristX+", rightWristX = "+rightWristX+" and the difference is "+difference);
    }
}