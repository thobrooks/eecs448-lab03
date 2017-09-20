i = 0

function slideR(){
    if (i >= 4)
        i = 0;
    else
        i++;
    determineI();
}

function slideL(){
    if (i <= 0)
        i = 4;
    else
        i--;
    determineI();
}

function determineI(){
    let image = document.getElementById("ima");
    if (i == 0)
        image.src = "one.png";
    if (i == 1)
        image.src = "two.png";
    if (i == 2)
        image.src = "three.png";
    if (i == 3)
        image.src = "four.png";
    if (i == 4)
        image.src = "five.png";
    image.width = 500;
    image.height = 500;
        
}