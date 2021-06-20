canvas = document.getElementById("myCanvas");
color = "red"

ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40 ,0 ,2 * Math.PI);
ctx.stroke();
mouse_x = e.clientX
mouse_y = e.clientY

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    //taking color from input box
    //additionl activity ends

    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;

   circle(mouse_x , mouse_y);
}
function  circle(mouse_x , mouse_y);
{
    ctx.beginPath();
    ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(mouse_x, mouse_y, 40 ,0 ,2 * Math.PI);
ctx.stroke();
}