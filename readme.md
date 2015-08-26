# Vanilla Raptorize

This is a lightweight port from the original [Zurb Raptorize](http://zurb.com/playground/jquery-raptorize) made with modern technologies.

## Usage

First of all, you'll need instance that:

```javascript
var myRaptor = Raptorize();
```

Then, when you want to see El Raptor on your screen, just call him like this:

```javascript
myRaptor.go();
```

## Configurations

These are our defaults:

```javascript
{
  audioPath: ['assets/sounds/raptor.mp3', 'assets/sounds/raptor.ogg'],
  imagePath: 'assets/images/raptor.png',

  className: 'raptor',
  animationTime: 2000
}
```

You can override any option:

```javascript
var myRaptor = Raptorize({
  className: 'el-raptor',
  animationTime: 500
});
```

## Examples

### Click Event

```javascript
var myRaptor = Raptorize();

// Without jQuery
document.querySelector('my-selector').addEventListener('click', myRaptor.go);

// With jQuery
$('my-selector').on('click', myRaptor.go);

```

### Konami Code

```javascript
var myRaptor, konamiIndex, konamiCode;

myRaptor = Raptorize();
konamiIndex = 0;
konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];

window.addEventListener('keydown', function(event) {
  if (event.keyCode === konamiCode[konamiIndex]) {
    konamiIndex++;
    if (konamiIndex == konamiCode.length) { myRaptor.go(); }
  } else {
    konamiIndex = 0;
  }
});

```

---

That's all, folks.
