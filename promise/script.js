// Creating a promise

let completed = true;
let promiseOne = new Promise((resolve, reject) => {
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
promiseOne
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("promise executed");
  });

// Promise Chaining

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 2000);
});

promiseTwo
  .then((res) => {
    console.log(res);
    return res * 10;
  })
  .then((res) => {
    console.log(res);
    return res * 10;
  })
  .then((res) => {
    console.log(res);
  });
