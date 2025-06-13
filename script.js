let timer;
let isRunning = false;
let [hrs, mins, secs] = [0, 0, 0];
const display = document.getElementById('display');
const lapList = document.getElementById('laps');

function updateTime() {
  secs++;
  if (secs == 60) {
    secs = 0;
    mins++;
    if (mins == 60) {
      mins = 0;
      hrs++;
    }
  }

  const h = String(hrs).padStart(2, '0');
  const m = String(mins).padStart(2, '0');
  const s = String(secs).padStart(2, '0');
  display.textContent = `${h}:${m}:${s}`;
}

document.getElementById('start').addEventListener('click', () => {
  if (!isRunning) {
    timer = setInterval(updateTime, 1000);
    isRunning = true;
  }
});

document.getElementById('pause').addEventListener('click', () => {
  clearInterval(timer);
  isRunning = false;
});

document.getElementById('reset').addEventListener('click', () => {
  clearInterval(timer);
  [hrs, mins, secs] = [0, 0, 0];
  display.textContent = '00:00:00';
  lapList.innerHTML = '';
  isRunning = false;
});

document.getElementById('lap').addEventListener('click', () => {
  if (isRunning) {
    const lapTime = display.textContent;
    const li = document.createElement('li');
    li.textContent = `Lap: ${lapTime}`;
    lapList.appendChild(li);
  }
});