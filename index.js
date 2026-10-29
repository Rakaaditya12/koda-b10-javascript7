function stop() {
  console.log("Selesai");
}

function setTime(a, b) {
  let time = 1000;

  console.log(a); 
  setTimeout(() => {
    if (a >= 5) {
      b();
      return;
    }

    setTime(a + 1, b);
  }, time);
}

setTime(1, stop);
