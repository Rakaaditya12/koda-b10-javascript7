function end() {
  console.log("selesai");
}

function timeoutOutput(a, b) {
  setTimeout(() => {
    console.log(a);

    if (a >= 5) {
      b();
      return;
    }

    timeoutOutput(a + 1, b);
  }, 1000);
}

timeoutOutput(1, end);
