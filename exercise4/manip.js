function change()
{
    var red = document.getElementById("color1").value;
    var green = document.getElementById("color2").value;
    var blue = document.getElementById("color3").value;
    var width = document.getElementById("width").value;
    
    var bred = document.getElementById("bcolor1").value;
    var bgreen = document.getElementById("bcolor2").value;
    var bblue = document.getElementById("bcolor3").value;
    
    var pa = document.getElementById("para");
    pa.style.backgroundColor = "rgb(" + bred + ", " + bgreen + ", " + bblue + ")" ;
    pa.style.borderColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    pa.style.borderWidth = width + "px " +  width + "px " + width + "px " + width + "px";
    alert(pa.style.borderWidth);
}
