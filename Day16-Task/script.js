const countdown = (num, callback) => {
  const countdownDiv = document.getElementById("countdown");

  if (num > 0) {
    countdownDiv.innerHTML = num;
    setTimeout(() => {
      countdown(num - 1, callback);
    }, 1000);
  } else {
    countdownDiv.innerHTML = "Happy Independence Day";
    callback();
  }
};

countdown(10, () => {
  console.log("Countdown complete!");
});
