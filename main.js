on_the_ground = "";
unforgiven = "";
function setup() {
    canvas = createCanvas(600, 530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 530);
}

function preload() {
    on_the_ground = loadSound("On-The-Ground.mp3");
    unforgiven = loadSound("UNFORGIVEN(PagalWorldl).mp3")
}