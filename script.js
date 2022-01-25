const take = document.querySelector(".timer");
const bttn = document.querySelector(".btn");
const reset = document.querySelector(".reset");
let con = document.querySelector(".content");

bttn.addEventListener("click", function () {
  let time = 1500;
  const whole = setInterval(function () {
    let min = String(Math.trunc(time / 60)).padStart(2, 0);
    let sec = String(time % 60).padStart(2, 0);

    take.textContent = `${min}:${sec}`;
    time--;
    if (time === -1) {
      clearInterval(whole);
      con.style.backgroundColor = "#5E9CA0";
      document.body.style.backgroundColor = "#4C9195";
      bttn.style.color = "#4C9195";
      const audio1 = new Audio("sound1.mp3");
      audio1.play();
    }
  }, 1000);
  const audio2 = new Audio("sound.mp3");
  audio2.play();
});
