// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const SHOWING = "showing";

const rangeContainer = document.querySelector(".js-rangeContainer"),
  range = rangeContainer.querySelector("input"),
  maxNum = rangeContainer.querySelector("h2 span");

const userGuessContainer = document.querySelector(".js-userGuessContainer"),
  guessInput = userGuessContainer.querySelector("input"),
  playBtn = userGuessContainer.querySelector("button");

const selectResultContainer = document.querySelector(
    ".js-selectResultContainer"
  ),
  yourNumber = selectResultContainer.querySelector("#yourNumber"),
  machineNumber = selectResultContainer.querySelector("#machineNumber"),
  result = selectResultContainer.querySelector("#result");
function getWinner(randomNum) {
  if (yourNumber.innerHTML > randomNum) {
    result.innerHTML = "You win!";
  } else if (yourNumber.innerHTML < randomNum) {
    result.innerHTML = "You lose!";
  } else {
    result.innerHTML = "TRY AGAIN";
  }
}
function getMachineNum() {
  const randomNum = Math.floor(Math.random() * maxNum.innerHTML);
  machineNumber.innerHTML = randomNum;
  getWinner(randomNum);
}

function getPlay() {
  selectResultContainer.classList.add(SHOWING);
  yourNumber.innerHTML = guessInput.value;
  getMachineNum();
}

function getRangeNumber() {
  maxNum.innerHTML = this.value;
}
function init() {
  range.addEventListener("click", getRangeNumber);
  playBtn.addEventListener("click", getPlay);
}

init();
