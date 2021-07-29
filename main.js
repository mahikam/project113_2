function preload(){};

function setup(){
    canvas=createCanvas(400,400);
    canvas.position(475,300);
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,50,50,300,300);

    //light blue circles
    fill(169, 191, 217);
    stroke(169, 191, 217);
    circle(50,50,50);

    fill(169, 191, 217);
    stroke(169, 191, 217);
    circle(350,350,50);

    //dark blue circles
    fill(116, 138, 163);
    stroke(116, 138, 163);
    circle(50,350,50);

    fill(116, 138, 163);
    stroke(116, 138, 163);
    circle(350,50,50);

    //purple circles
    fill(119, 112, 145);
    stroke(119, 112, 145);
    rect(175, 30, 55, 55, 15);

    fill(119, 112, 145);
    stroke(119, 112, 145);
    rect(175, 325, 55, 55, 15);

    //light purple circles
    fill(176, 171, 196);
    stroke(176, 171, 196);
    rect(30, 175, 55, 55, 15);

    fill(176, 171, 196);
    stroke(176, 171, 196);
    rect(325, 175, 55, 55, 15);
}

function take_snapshot(){
    save("project113.png");
}