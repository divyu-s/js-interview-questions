// Creating a promise

let completed = true;
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (completed) {
      resolve("i have completed javascript");
    } else {
      reject("i have't completed javascript");
    }
  }, 2000);
});

// Consuming a promise
// catch, finally
promise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("promise executed");
  });
