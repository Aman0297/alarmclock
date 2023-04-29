const timeEl = document.querySelector(".time");
const setBtn = document.querySelector(".set-btn");
const clearBtn = document.querySelector(".clear-btn");
const alarmInput = document.querySelector("#alarm");
const alarmSound = document.querySelector("#alarm-sound");

let alarm;

function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  timeEl.textContent = `${hours}:${minutes}:${seconds}`;

  if (alarm && alarm === `${hours}:${minutes}`) {
    playAlarm();
  }
}

function setAlarm() {
  alarm = alarmInput.value;
  clearBtn.disabled = false;
  setBtn.disabled = true;
}

function clearAlarm() {
  alarm = undefined;
  clearBtn.disabled = true;
  setBtn.disabled = false;
  stopAlarm();
}

function playAlarm() {
  alarmSound.play();
}

function stopAlarm() {
  alarmSound.pause();
  alarmSound.currentTime = 0;
}

setInterval(updateTime, 1000);

setBtn.addEventListener("click", setAlarm);
clearBtn.addEventListener("click", clearAlarm);
