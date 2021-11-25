img="";
status2="";

function setup(){
    canvas = createCanvas(640, 420);
    cabvas.center();
    objectDetector = ml5.objectDetector('cocssd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: detecting objects";
}

function preload(){
    img = loadImage("paintingse.jpeg");
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Wall", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30,50, 450, 350);

    fill("#FF0000");
    text("Paintings", 320, 120);
    noFill();
    stroke("#FF0000");
    rect(300,90, 270, 320);
}

function modelLoaded(){
    console.log("model is initialized!");
    status2=true;
    objectDetector.detect(img,gorResults);

}

function gotResults(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
}