function setup(){
    cam = createCapture(VIDEO);
    cam.size(600,400);

    can = createCanvas(470,300);

    pose = ml5.poseNet(cam,mod)
}

function mod(){
    console.log("aaaa")
}