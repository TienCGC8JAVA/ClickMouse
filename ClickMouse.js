function moveRightImg()
{
    document.getElementById("funny").style.left = parseInt(document.getElementById("funny").style.left) + 10 +'px';
}

window.onload = function ()
{
    document.getElementById("funny").style.position = "relative";
    document.getElementById("funny").style.left = "0px";
}


