function updateClock() {
  const now = new Date();
  clock.innerHTML = now.toLocaleTimeString();
}

const clock = document.createElement('div');
document.body.append(clock);

let timerId;
document.querySelector('#start').onclick = () => {
  timerId = setInterval(updateClock, 1000);
  updateClock();
};

document.querySelector('#stop').onclick = () => {
  clearInterval(timerId);
};