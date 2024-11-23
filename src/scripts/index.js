const min = document.querySelector("#minutes");
const sec = document.querySelector("#seconds");
const ms = document.querySelector("#miliseconds");
const start = document.querySelector("#start");
const pause = document.querySelector("#pause");
const resume = document.querySelector("#resume");
const reset = document.querySelector("#reset");

let interval;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let isPaused = false;

const startTimer = () => {
  interval = setInterval(() => {
    if (!isPaused) {
      miliseconds += 10;
      if (miliseconds === 1000) {
        seconds++;
        miliseconds = 0;
      }
      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }
    }

    min.textContent = formatTimer(minutes);
    sec.textContent = formatTimer(seconds);
    ms.textContent = formatTimer(miliseconds);
  }, 10);

  start.style.display = "none";
  pause.style.display = "block";
};

const pauseTimer = () => {
  isPaused = true;
  pause.style.display = "none";
  resume.style.display = "block";
};

const resumeTimer = () => {
  isPaused = false;
  pause.style.display = "block";
  resume.style.display = "none";
};

const resetTimer = () => {
  isPaused = false;
  clearInterval(interval);
  miliseconds = 0;
  seconds = 0;
  minutes = 0;

  min.textContent = "00";
  sec.textContent = "00";
  ms.textContent = "000";

  start.style.display = "block";
  resume.style.display = "none";
  pause.style.display = "none";
};

const formatTimer = (time) => (time < 10 || time < 100 ? `0${time}` : time);

start.addEventListener("click", startTimer);
pause.addEventListener("click", pauseTimer);
resume.addEventListener("click", resumeTimer);
reset.addEventListener("click", resetTimer);
