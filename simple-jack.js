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

      // Audio properties
      audio.src = "https://dl.dropboxusercontent.com/s/bu1pyab9c4u23xy/utvecklingsstorda.m4a";
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
