var myImg = document.getElementById("funny");

function moveRightImg()
{
    myImg.style.left = parseInt(myImg.style.left) + 10 +'px';
}

function click()
{
    myImg.style.position = "relative";
    myImg.style.left = "0px";
}

window.onload = click;
