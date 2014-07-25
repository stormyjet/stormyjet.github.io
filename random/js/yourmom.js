      var request = new XMLHttpRequest();
      request.onload = function() {
          // get the file contents
          var fileContent = this.responseText;
          // split into lines
          var fileContentLines = fileContent.split('\n');
          // get a random index (line number)
          var randomLineIndex = Math.floor(Math.random() * fileContentLines.length);
          // extract the value
          var randomLine = fileContentLines[randomLineIndex];


          document.getElementById('first').innerHTML = randomLine;
      };
      request.open('GET', '../txt/ym-first.txt', true);
      request.send();
      var request = new XMLHttpRequest();
      request.onload = function() {
          // get the file contents
          var fileContent = this.responseText;
          // split into lines
          var fileContentLines = fileContent.split('\n');
          // get a random index (line number)
          var randomLineIndex = Math.floor(Math.random() * fileContentLines.length);
          // extract the value
          var randomLine = fileContentLines[randomLineIndex];


          document.getElementById('second').innerHTML = randomLine;
      };
      request.open('GET', '../txt/ym-second.txt', true);
      request.send();