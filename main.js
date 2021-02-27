function preload()
{

}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    v1 = createCapture(VIDEO);
    v1.hide();
    tint_color = "";
}

function draw()
{
    image(v1, 45, 50, 550, 400);
    tint(tint_color)

    fill(0, 128, 0);
    stroke(128, 0, 0);
    rect(40, 25, 5, 440)

     fill(128, 0, 0);
    stroke(128, 0, 0);
    circle(40, 25, 30, 440)

    fill(128, 0, 0);
    stroke(128, 0, 0);
    circle(40, 480, 30, 440)

    fill(128, 0, 0);
    stroke(128, 0, 0);
    circle(600, 25, 30, 440)
  
    fill(128, 0, 0);
    stroke(128, 0, 0);
    circle(600, 480, 30, 440)

    fill(0, 128, 0);
    stroke(128, 0, 0);
    rect(595, 35, 5, 430)

    fill(0, 128, 0);
    stroke(128, 0, 0);
    rect(55, 25, 530, 5)

    fill(0, 128, 0);
    stroke(128, 0, 0);
    rect(55, 475, 530, 5)

}

function take_snapshot()
{
    save('Picture.png');
}

function filter_tint()
{
    tint_color = document.getElementById('color_name').value;
}