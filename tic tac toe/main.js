console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let isgameover = false;

music.play();
music.loop = true;
// turn
const turn_change = () => {
  turn = turn === "X" ? "O" : "X";
  return turn;
};

//function to check winner

const checkwin = () => {
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const boxtexts = document.getElementsByClassName("boxtext");

  wins.forEach((e) => {
    if (
      boxtexts[e[0]].innerText !== "" &&
      boxtexts[e[0]].innerText === boxtexts[e[1]].innerText &&
      boxtexts[e[1]].innerText === boxtexts[e[2]].innerText
    ) {
      isgameover = true;

      document.querySelector(".info").innerText =
        boxtexts[e[0]].innerText + " Won";

      document.querySelector(".imgbox img").style.width = "200px";

      gameover.play();
    }
  });
};

//main logic

let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");

  element.addEventListener("click", () => {
    if (boxtext.innerText === "" && !isgameover) {
      boxtext.innerText = turn;

      turn = turn_change();

      audioTurn.play();

      checkwin();

      if (!isgameover) {
        document.querySelector(".info").innerText =
          `Turn for ${turn}`;
      }
    }
  });
});

const reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  let boxtexts = document.querySelectorAll(".boxtext");
  Array.from(boxtexts).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  isgameover = false;
  document.querySelector(".line").style.width = "0vw";
  document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
  document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0px";
});
