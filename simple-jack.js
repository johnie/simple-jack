/**
 * simple-jack.js
 */

var Jack = Jack || {};

Jack.Simple = (function () {

  // Initiate
  var Message =  {
    init: function () {
      // Create the audio element
      var audio = document.createElement('AUDIO');

      // Simple Jack messages
      var messages = [
        "https://dl.dropboxusercontent.com/s/nc7zhg5uolvvg9j/simplejack-svenska.m4a",
        "https://dl.dropboxusercontent.com/s/yaims8r1gecxhe0/simplejack-happy.m4a",
        "https://dl.dropboxusercontent.com/s/1bk6cbhsiqgcq6i/simplejack-tears.m4a"
      ];

      // Choose message
      var randMessage = messages[Math.floor(Math.random() * messages.length)];

      // Audio properties
      audio.src = randMessage;
      audio.autoplay = true;

      // Container
      var container = document.body;

      container.appendChild(audio);
    },
    load: function () {
      setTimeout(this.init, Math.random() * 5000 + 2000);      
    }
  };

  // Load the message
  Message.load();
})();
