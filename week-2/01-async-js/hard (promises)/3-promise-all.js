/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res();
    }, t);
  });
}

function wait2(t) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res();
    }, t);
  });
}

function wait3(t) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res();
    }, t);
  });
}

function calculateTime(t1, t2, t3) {
  const startTime = new Date().getTime();;
  return Promise.all([wait1(t1*1000), wait2(t2*1000), wait3(t3*1000)])
    .then(() => {
      const endTime = new Date().getTime();;
      const timeDifference = endTime - startTime;
      return timeDifference;
    })
    .catch((error) => {
      console.error("Error:", error);
      throw error; // Re-throwing the error for handling it outside if needed
    });
}

module.exports = calculateTime;
