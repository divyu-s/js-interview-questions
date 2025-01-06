// Callback

// Synchronous Example
//  function callback() {
// //   console.log("callback executed");
// // }

// // function performOperation(callback) {
// //   callback();
// //   console.log("Performing Operation");
// // }

// performOperation(callback);

//Asynchronous Example
function callback() {
  console.log("callback executed");
}

function performOperation(callback) {
  setTimeout(() => {
    console.log("Performed asyc Operation");
    callback();
  }, 1000);
}

performOperation(callback);
