/**
 * simple-jack.js
 */

var Jack = Jack || {};

Jack.Simple = (function () {
  'use strict';

  // Initiate
  var Message =  {
    
    init: function () {
      
      // Create the audio element
      var audio = document.createElement('AUDIO');

      // Randomizer for messages array
      Array.prototype.randomizr = function () {
        return this[Math.floor((Math.random()*this.length))];
      }

      // Simple Jack messages
      var messages = [
        'http://dl.dropboxusercontent.com/s/nc7zhg5uolvvg9j/simplejack-svenska.m4a',
        'http://dl.dropboxusercontent.com/s/yaims8r1gecxhe0/simplejack-happy.m4a',
        'http://dl.dropboxusercontent.com/s/1bk6cbhsiqgcq6i/simplejack-tears.m4a',
        'https://dl.dropboxusercontent.com/s/20rakco0axa9ztn/simplejack-retardalert.m4a',
        'https://dl.dropboxusercontent.com/s/6u6ws2z0zswpi80/simplejack-cripplefight.m4a',
        'http://dl.dropboxusercontent.com/s/2jid88eyr2oiaf3/simplejack-timmy.m4a'
      ];

      // Audio properties
      audio.src = messages.randomizr();
      audio.autoplay = true;

      // Container
      var container = document.body;
      container.appendChild(audio);

    },
    load: function () {

      setTimeout(this.init, Math.random() * 5000 + 2000);      

    }

  };

  // Load the messages
  Message.load();
  
})();
