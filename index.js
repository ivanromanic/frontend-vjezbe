
var randomnumber1 = Math.floor(Math.random() *6 + 1);

document.getElementById("imgID1").src="images/dice" + randomnumber1 + ".png";

var randomnumber2 = Math.floor(Math.random() *6 + 1);

document.getElementById("imgID2").src="images/dice" + randomnumber2 + ".png";

if(randomnumber1 > randomnumber2){ document.getElementById("declaration").innerHTML="Player 1 wins!"; }

else if(randomnumber1 < randomnumber2){ document.getElementById("declaration").innerHTML="Player 2 wins!"; }

else if(randomnumber1 = randomnumber2){ document.getElementById("declaration").innerHTML="Draw!"; }