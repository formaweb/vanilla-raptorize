var Raptorize = (function(extended) {
  'use strict';

  var body, defaults, options,
      audioTemplate, sourceAudioTemplate, imageTemplate,
      audio, image;

  body = document.body;
  options = {};

  //--- OPTIONS ---//
  defaults = {
    audioPath: ['assets/sounds/raptor.mp3', 'assets/sounds/raptor.ogg'],
    imagePath: 'assets/images/raptor.png',

    className: 'raptor',
    animationTime: 2000
  };

  extend(options, defaults, extended);

  //--- SETUP ---//
  audioTemplate = document.createElement('audio');
  audioTemplate.className = options.className + '-source';

  for (var source in options.audioPath) {
    sourceAudioTemplate = document.createElement('source');
    sourceAudioTemplate.src = options.audioPath[source];
    audioTemplate.appendChild(sourceAudioTemplate);
  }

  imageTemplate = document.createElement('img');
  imageTemplate.className = options.className;
  imageTemplate.src = options.imagePath;

  audio = body.appendChild(audioTemplate);
  image = body.appendChild(imageTemplate);

  image.style.display = 'none';

  //--- THE HILARITY ---//
  function go() {
    setTimeout(function () {
      audio.play();
    }, (options.animationTime / 3));

    image.style.display = 'block';
    image.classList.add(options.className + '-go');

    setTimeout(function () {
      image.classList.remove(options.className + '-go');
    }, options.animationTime);
  }

  //--- EXTEND (COMMON) ---//
  // Use Object.assign() for EcmaScript 6.
  function extend(out) {
    out = out || {};

    for (var i = 1; i < arguments.length; i++) {
      if (!arguments[i]) { continue; }
      for (var key in arguments[i]) {
        if (arguments[i].hasOwnProperty(key)) { out[key] = arguments[i][key]; }
      }
    }

    return out;
  }

  return { go: go }
});



//--- USAGE ---//
var myRaptor = Raptorize({
  audioPath: ['//zurb.com/playground/uploads/upload/upload/230/raptor-sound.mp3',
              '//zurb.com/playground/uploads/upload/upload/231/raptor-sound.ogg'],
  imagePath: '//zurb.com/playground/uploads/upload/upload/224/raptor.png',
});

setTimeout(myRaptor.go, 3000);
