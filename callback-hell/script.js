// Callback Hell

// const asyncTaskOne = (callback) => {
//   setTimeout(() => {
//     console.log("task one async task");
//     callback();
//   }, 1000);
// };

// const asyncTaskTwo = (callback) => {
//   setTimeout(() => {
//     console.log("task two async task");
//     callback();
//   }, 1000);
// };

// const asyncTaskThree = (callback) => {
//   setTimeout(() => {
//     console.log("task three async task");
//     callback();
//   }, 1000);
// };

// asyncTaskOne(() => {
//   asyncTaskTwo(() => {
//     asyncTaskThree(() => {
//       console.log("All task done");
//     });
//   });
// });

const asyncTaskOne = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Async task one");
    }, 1000);
  });
};

const asyncTaskTwo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Async task two");
    }, 1000);
  });
};

const asyncTaskThree = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Async task three");
    }, 1000);
  });
};

asyncTaskOne()
  .then((res) => {
    console.log(res);
    return asyncTaskTwo();
  })
  .then((res) => {
    console.log(res);
    return asyncTaskThree();
  })
  .then((res) => {
    console.log(res);
    console.log("All task done");
  });
