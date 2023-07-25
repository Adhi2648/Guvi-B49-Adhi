const countdown = (num, callback) => {
  if (num > 0) {
    console.log(num);
    setTimeout(() => {
      countdown(num - 1, callback);
    }, 1000);
  } else {
    callback();
  }
};

// countdown(1, () => console.log("Happy Independence Day"));

countdown(
  10,
  () => {
    console.log("Happy Independence Day");
  },
  1000
);
