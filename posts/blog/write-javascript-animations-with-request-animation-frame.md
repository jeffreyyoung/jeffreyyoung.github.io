---
title: Javascript Alternative to animateMotion
image: /static/images/byu-big-data.png
imageDescription: Screen shot of the current website
category: blog
id: 203948902
order: 10
description: How to write a javascript alternative to animateMotion
createdTime: Wed Nov 22 2017 00:38:32 GMT-0700 (MST)
---

I recently was trying to write a simple svg animation for a client.  To finish the animation I needed to animate a circle along a bezier path.  I quickly found  [<animateMotion>](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animateMotion) which made doing such an animation simple, but soon learned `animateMotion` is not supported by any versions of Internet Explorer. Since I had trouble finding any straight forward ways to do the animation using css, I decided to write the animation using javascript. Which brings us to: 

### How to animate a svg circle along an svg path using javascript.

To do our animation we'll write a function that will execute one "step" of our animation, and call that function repeatedly throughout the duration of our animation.  To help our animation to be more performant, we'll do all dom mutations within a callback function passed into  `requestAnimationFrame`.  Letting the browser call our animation function via `requestAnimationFrame` allows the browser to batch dom manipulations together, resulting in fewer unnecessary repaints, which means a more performant animation.

```javascript

function animateProgress(duration /*duration of animation*/, animateElement /*callback function to animate our javascript element*/) {
  var start = null;

  function step(timestamp) {
    if (!start) {
      start = timestamp;
    }
    var timeSinceAnimationStart = timestamp - start;
    var percentProgress = timeSinceAnimationStart / duration;

    animateElement(percentProgress);
    if (timeSinceAnimationStart < duration) {
      requestAnimationFrame(step);
    } else {
      animateElement(1); //animation is Finished :D
    }
  }

  requestAnimationFrame(step);
}
/**
  from - initial value of animated element at beginning of animation
  to - final value of animated element at end of animation
  duration - time in milliseconds of animation
  animateElement - call back to animate element
*/
function animate(from, to, duration, animateElement) {
  animateProgress(duration, function(percentProgress) {
    var nextValue = from + (to - from) * percentProgress;
    animateElement(nextValue);
  })
}
```

We can use our animate function like so:

```javascript
var redSquare = document.getElementById('red-square')
animate(0, 100, 1000, function(nextValue) {
  redSquare.style.left = nextValue+'px';
})
```

<iframe height='265' scrolling='no' title='Animation With requestAnimationFrame' src='//codepen.io/jeffreyyoung/embed/xPWmpM/?height=265&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/jeffreyyoung/pen/xPWmpM/'>Animation With requestAnimationFrame</a> by Jeff (<a href='https://codepen.io/jeffreyyoung'>@jeffreyyoung</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

In the above code, we are animating the `left` style of the square element, from 0 to 100, over a period of 1000 milliseconds

Now if we wanted to animate a svg circle along a path, we could do so with the following code: 
```javascript
function animateCircleAlongPath(circle, path) {
    animate(0, path.getTotalLength(), 3000, function(currentLengthOnPath) {
    var nextCoords = path.getPointAtLength(currentLengthOnPath);
		circle.setAttribute('cx', nextCoords.x);
		circle.setAttribute('cy', nextCoords.y);
  })
}
```

<iframe height='265' scrolling='no' title='SVG Animation With requestAnimationFrame' src='//codepen.io/jeffreyyoung/embed/QOmzXQ/?height=265&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/jeffreyyoung/pen/QOmzXQ/'>SVG Animation With requestAnimationFrame</a> by Jeff (<a href='https://codepen.io/jeffreyyoung'>@jeffreyyoung</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

