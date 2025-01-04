// Creating a promise

// let completed = true;
// let promiseOne = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (completed) {
//       resolve("i have completed javascript");
//     } else {
//       reject("i have't completed javascript");
//     }
//   }, 2000);
// });

// Consuming a promise
// catch, finally

// promiseOne
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("promise executed");
//   });

// Promise Chaining

// const promiseTwo = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });

// promiseTwo
//   .then((res) => {
//     console.log(res);
//     return res * 10;
//   })
//   .then((res) => {
//     console.log(res);
//     return res * 10;
//   })
//   .then((res) => {
//     console.log(res);
//   });

// Promise.all, Promise.race, sequence

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 1");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 2");
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 3");
  }, 3000);
});

// const promises = Promise.all([promise1, promise2, promise3]);

// promises.then((res) => {
//   const [promise1, promise2, promise3] = res;
//   console.log(promise1, promise2, promise3);
// });

// async function parallel() {
//   const [promise1R, promise2R, promise3R] = await Promise.all([
//     promise1,
//     promise2,
//     promise3,
//   ]);

//   return `${promise1R} ${promise2R} ${promise3R}`;
// }

// parallel().then((res) => {
//   console.log(res);
// });

// const promises = Promise.race([promise1, promise2, promise3]);

// promises.then((res) => {
//   console.log(res);
// });

// async function race() {
//   const res = await Promise.race([promise1, promise2, promise3]);
//   return res;
// }

// race().then((res) => {
//   console.log(res);
// });

// promise1
//   .then((res) => {
//     console.log(res);
//     return promise2;
//   })
//   .then((res) => {
//     console.log(res);
//     return promise3;
//   })
//   .then((res) => {
//     console.log(res);
//   });

// async function sequence() {
//   const promise1R = await promise1;
//   const promise2R = await promise2;
//   const promise3R = await promise3;

//   return `${promise1R} ${promise2R} ${promise3R}`;
// }

// sequence().then((res) => {
//   console.log(res);
// });

// Async Await
