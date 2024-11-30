/*Throttling is a technique used to control how many times we allow a function to be executed over time. When a JavaScript function 
is said to be throttled with a wait time of X milliseconds, it can only be invoked at most once every X milliseconds. The callback 
is invoked immediately and cannot be invoked again for the rest of the wait duration. */

function throttle(func, wait) {
  let shouldThrottle = true;

  return function (...args) {
    if (shouldThrottle) {
      func.apply(this, args);

      shouldThrottle = false;
      setTimeout(() => {
        shouldThrottle = true;
      }, wait);
    }
  };
}

function buttonClick() {
  console.log("button-clicked");
}

const betterClick = throttle(buttonClick, 1000);
