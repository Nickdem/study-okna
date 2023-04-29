function timer(eventTime: number) {
  const elms = document.querySelectorAll(".timer-item");
  const t = setInterval(() => {
    console.log(123);

    setTimerHTML();
  }, 1000);

  function getCurrentDate() {
    return Date.now();
  }

  function floor(num: number) {
    return Math.floor(num);
  }

  function getTimeLeft() {
    if (eventTime - getCurrentDate() < 0) {
      clearInterval(t);
      return [0, 0, 0, 0];
    }

    const s = (eventTime - getCurrentDate()) / 1000;
    const m = s / 60;
    const h = m / 60;
    const days = floor(h / 24);
    const hours = floor(h % 24);
    const minutes = floor(m % 60);
    const seconds = floor(s % 60);
    return [days, hours, minutes, seconds];
  }

  function setTimerHTML() {
    const time = getTimeLeft();
    elms.forEach((item, idx) => {
      const value = time[idx].toString();
      item.innerHTML = value.length > 1 ? value : "0" + time[idx];
    });
  }
}
