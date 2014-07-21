//Candy Loader
//Modified Code by Stormy
//Originally made by 
var request = new XMLHttpRequest();
request.onload = function() {
    // open the candies
    var fileContent = this.responseText;
    // split into lines
    var fileContentLines = fileContent.split('\n');
    // get a random candy
    var randomLineIndex = Math.floor(Math.random() * fileContentLines.length);
    // store the candy for use
    var randomLine = fileContentLines[randomLineIndex];

    // we grab the div id and insert a candy
    document.getElementById('candy').innerHTML = randomLine;
};
//were grabbing the candies from here.
request.open('GET', 'txt/candy.txt', true);
request.send();