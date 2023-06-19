noseX = 0;
noseY = 0;

function preload(){
    mustache = loadImage('mustache.png');
}

function setup(){
    canvas = createCanvas(400, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 400, 300);
    image(mustache, noseX, noseY, 150, 100);
}

function take_snapshot(){
    save('myfilterimage.png');
}

function modelLoaded () {
    console.log('posenet is initialized');
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x - 70;
        noseY = results[0].pose.nose.y - 30;
    }
}