// Kenny Chen 9-10

const button = document.querySelector("button")
const heading = document.querySelector("h1")

function initialize() {
    heading.textContent = " ";
    dice1 = document.getElementById("dice1")
    dice2 = document.getElementById("dice2")
    rolled = false;
    d1 = 1;
    d2 = 1;
}

function roll() {
    dice1.classList.add("rolling")
        dice2.classList.add("rolling")
    setTimeout(function(){
        tempd1 = Math.floor(Math.random()*6) + 1;
        tempd2 = Math.floor(Math.random()*6)+ 1;
    
        sum = tempd1 + tempd2
        console.log(sum);
    
        display(tempd1, tempd2, sum);
        dice1.classList.remove("rolling")
        dice2.classList.remove("rolling")
    }, 500); 
}

function display(d1, d2, sum) {
    if (d1 == 1)
    {
        dice1.style.backgroundImage = "url(Images/side1.png)";
    }
    if (d1 == 2) 
    {
        dice1.style.backgroundImage = "url(Images/side2.png)";
    }
    if (d1 == 3) 
    {
        dice1.style.backgroundImage = "url(Images/side3.png)";
    }
    if (d1 == 4) 
    {
        dice1.style.backgroundImage = "url(Images/side4.png)";
    }
    if (d1 == 5) 
    {
        dice1.style.backgroundImage = "url(Images/side5.png)";
    }
    if (d1 == 6) 
    {
        dice1.style.backgroundImage = "url(Images/side6.png)";
    }


    if (d2 == 1)
    {
        dice2.style.backgroundImage = "url(Images/side1.png)";
    }
    if (d2 == 2) 
    {
        dice2.style.backgroundImage = "url(Images/side2.png)";
    }
    if (d2 == 3) 
    {
        dice2.style.backgroundImage = "url(Images/side3.png)";
    }
    if (d2 == 4) 
    {
        dice2.style.backgroundImage = "url(Images/side4.png)";
    }
    if (d2 == 5) 
    {
        dice2.style.backgroundImage = "url(Images/side5.png)";
    }
    if (d2 == 6) 
    {
        dice2.style.backgroundImage = "url(Images/side6.png)";
    }

    heading.textContent = "You rolled a " + sum + "!";
}