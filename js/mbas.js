Array.prototype.shuffle = function() {
    var input = this;
     
    for (var i = input.length-1; i >=0; i--) {
     
        var randomIndex = Math.floor(Math.random()*(i+1)); 
        var itemAtIndex = input[randomIndex]; 
         
        input[randomIndex] = input[i]; 
        input[i] = itemAtIndex;
    }
    return input;
}


function oneDish() {
    document.getElementById("food").innerHTML = (dish[randomDish]);
}

function weekDish() {
    document.getElementById("food").innerHTML = (weekDishes);
} 
	
var dish = [
	'köttbullar & makaroner',
	'soppa på en spik',
	'strumpgratäng',
	'plåsterpaj',
	'granatgratäng',
	'kanonkorvsröra',
	'bubbelplastssoppa',
	'kakpuré',
	'kaffealadåb',
	'knarkmuffins',
	'bönbullar'
	]

var randomDish = Math.floor(Math.random()*(dish.length));
    function printdish(){
    document.write(dish[randomDish]);
    }
		
dish.shuffle();

// slasha skiten från plats tre till åtta så vi får fem resultat
var weekDishes = dish.slice(3, 8).join("<br />");


function insert() {
	dish.push(addDish.value);
	//addDish.value = "";
	
}

var addDish = document.getElementById("addFood");
	addDish.addEventListener("click", insert);
// lägger till, men även blanksteg. sparas inte 


/* saker som hade varit kul att ha med 
långtidsspara
att inte spara om det är tomt i inmatningsfältet
bättre slumpfunktion
*/