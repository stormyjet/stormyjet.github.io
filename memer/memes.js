/* automemer 

based on poke.js */
var object1 = "valuenotset";
var modder = "valuenotset";
var playerWin = "null";
//set all vars to default
function startAdventure() {
    var object1 = list[Math.floor(Math.random() * list.length)]; //choose random 
    if (object1 != "valuenotset") {
        var levelOfPokemonW = Math.floor((Math.random() * 50) + 1);
        var hpOfPokemonW = (4 * levelOfPokemonW);
        document.getElementById("wildStatus").innerHTML = object1; //oh boy
    }
    else if (object1 == "valuenotset") {
        document.getElementById("wildStatus").innerHTML = "Somehow the random selector broke. Try again?";
    }
    else {
        document.getElementById("wildStatus").innerHTML = "The code literally broke. This is the catch all message. Please tell me what you did.";
    }
    //begin player selection for pokemon
    var modder = mod[Math.floor(Math.random() * mod.length)];
    if (object1 == modder) {
        document.getElementById("playerStatus").innerHTML = modder;
    }
    else if (modder != "valuenotset") {
        document.getElementById("playerStatus").innerHTML = modder;
    }
    else if (modder == "valuenotset") {
        document.getElementById("playerStatus").innerHTML = "Somehow the random selector broke. Try again?";
    }
    else {
        document.getElementById("playerStatus").innerHTML = "The code literally broke. This is the catch all message. Please tell me what you did.";
    }
    var object2 = obj2[Math.floor(Math.random() * obj2.length)];
    if (object2 == modder) {
        document.getElementById("playerStatus").innerHTML = object2;
    }
    else if (modder != "valuenotset") {
        document.getElementById("playerStatus").innerHTML = object2;
    }
    else if (modder == "valuenotset") {
        document.getElementById("playerStatus").innerHTML = "Somehow the random selector broke. Try again?";
    }
    else {
        document.getElementById("playerStatus").innerHTML = "The code literally broke. This is the catch all message. Please tell me what you did.";
    }
    //status writing
    document.getElementById("battleStatus").innerHTML = object1 + " " + modder + " " + object2;
}
var list = ['Lenin', 'Apple', 'Chicken', 'Blizzard', 'Weapon', 'Lemon', 'Lizard', 'Lennon'];
var mod = ['on', 'in', 'and', 'with', 'of', 'for'];
var obj2 = ['a pear', 'a mare', 'a chair', 'a square', 'a chair', 'a bear', 'the stairs', 'Bel Air'];