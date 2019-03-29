function moveRightImg()
{
    document.getElementById("funny").style.left = parseInt(document.getElementById("funny").style.left) + 10 +'px';
}

function click()
{
    document.getElementById("funny").style.position = "relative";
    document.getElementById("funny").style.left = "0px";
}

window.onload = click;
