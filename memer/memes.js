/* automemer 

based on poke.js */
var object1 = "valuenotset";
var modder = "valuenotset";
var object2 = "null";
//set all vars to default
function startAdventure() {
    var object1 = list[Math.floor(Math.random() * list.length)]; //choose random 
    var modder = mod[Math.floor(Math.random() * mod.length)];
    var object2 = obj2[Math.floor(Math.random() * obj2.length)];
    //status writing
    document.getElementById("battleStatus").innerHTML = object1 + " " + modder + " " + object2;
}
var list = ['Lenin', 'Apple', 'Chicken', 'Blizzard', 'Weapon', 'Lemon', 'Lizard', 'Lennon'];
var mod = ['on', 'in', 'and', 'with', 'of', 'for'];
var obj2 = ['a pear', 'a mare', 'a chair', 'a square', 'a chair', 'a bear', 'the stairs', 'Bel Air'];
