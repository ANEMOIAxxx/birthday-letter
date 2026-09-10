$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  envelope.click(function () {
    open();
  });

  btn_open.click(function (event) {
    event.stopPropagation();
    open();
  });

  btn_reset.click(function (event) {
    event.stopPropagation();
    close();
  });

  function open() {
    envelope.addClass("open").removeClass("close");
  }

  function close() {
    envelope.addClass("close").removeClass("open");
  }
});

// =========================
// BACKGROUND MUSIC
// =========================

const music = document.getElementById("birthdayMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", function () {

  if (music.paused) {

    music.play();

    musicBtn.innerHTML = "⏸️ Pause Music";
    musicBtn.classList.add("playing");

  } else {

    music.pause();

    musicBtn.innerHTML = "🎵 Play Music";
    musicBtn.classList.remove("playing");

  }

});