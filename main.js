left_Wrist_x = 0;
right_Wrist_x = 0;
differance = 0;

function setup() {

    canvas = createCanvas(800, 400);
    canvas.position(430, 130);



    video = createCapture(VIDEO);




    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log("poseNet Is Initialised And Loaded");
}

function draw() {
    image(video, 0, 0, 800, 400);
    document.getElementById("Font_size").innerHTML = "Font Size of the Text Will Be = " + differance + "px";
    textSize(differance);
    text('Vihaan', 50, 400);
}
function gotPoses(results, error) {
    if (error) {
        console.error(error);
    }
    if (results.length > 0) {
        console.log(results);

        right_Wrist_x = results[0].pose.rightWrist.x;
        left_Wrist_x = results[0].pose.leftWrist.x;

        differance = floor(left_Wrist_x - right_Wrist_x);

        console.log("rightwrist_x - " + results[0].pose.rightWrist.x + "rightwrist_y - " + results[0].pose.rightWrist.y);
        console.log("leftwrist_x - " + results[0].pose.leftWrist.x + "leftwrist_y - " + results[0].pose.leftWrist.y);
    }
}