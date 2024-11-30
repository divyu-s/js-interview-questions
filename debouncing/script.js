/*Debouncing is a technique used to control how many times we allow a function to be executed over time. When a JavaScript function 
  is debounced with a wait time of X milliseconds, it must wait until after X milliseconds have elapsed since the debounced function
  was last called. You almost certainly have encountered debouncing in your daily lives before — when entering an elevator. Only 
  after X duration of not pressing the "Door open" button (the debounced function not being called) will the elevator door actually 
  close (the callback function is executed).*/

/* A debounced function in JavaScript waits for X milliseconds after the last call before running. */
// function debounce(func, wait) {
//   let timeoutID = null;
//   return function (...args) {
//     clearTimeout(timeoutID);

//     timeoutID = setTimeout(() => {
//       timeoutID = null;
//       func.apply(this, args);
//     }, wait);
//   };
// }

function debounce(func, wait) {
  let timeoutID = null;

  return function (...args) {
    let context = this;

    clearTimeout(timeoutID);

    timeoutID = setTimeout(function () {
      func.apply(context, args);
    }, wait);
  };
}

function getData() {
  console.log("Fetching Data.....");
}

const debouncedSearch = debounce(getData, 1000);
