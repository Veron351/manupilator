function setup() 
{
    video = createCapture(VIDEO);
    video.size = (550, 550);

    canvas = createCanvas(550, 450);
    canvas.position(750, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.lof('PoseNet is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;

        leftWristY = results[0].pose.nose.leftWrist.y;
        rightWristY = results[0].pose.nose.rightWrist.y;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + " rightWristX = " + rightWristX + "difference = " + difference);
    }
}

function draw() {
    textSize(difference);
    fill('#FFE787')
    text('Risha', 50, 400);
}