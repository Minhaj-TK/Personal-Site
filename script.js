let clickCount = 0;

function shrinkNo() {
  clickCount++;

  const noButton = document.getElementById("no-button");
  const yesButton = document.getElementById("yes-button");

  if (clickCount === 1 || clickCount === 2) {
    noButton.style.transform = `scale(${1 - 0.3 * clickCount})`;
    yesButton.style.transform = `scale(${1 + 0.3 * clickCount})`;
  } else if (clickCount >= 3) {
    noButton.style.display = "none";
    yesButton.style.transform = "scale(2)";
  }
}

function showCongrats() {
  document.querySelector(".container").classList.add("hidden");
  document.getElementById("congrats").classList.remove("hidden");
}
