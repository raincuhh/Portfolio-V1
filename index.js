window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    setInterval(iterateThroughAnimatedWords, 2000);
  }, 2000);
});

let animatedWords = ["websites", "apps", "games", "ux/ui", "things"];
let animatedWordsIndex = 0;

function iterateThroughAnimatedWords() {
  let animatedSpan = document.querySelector("#infoBoxAnimSpan");
  animatedSpan.innerHTML = animatedWords[animatedWordsIndex];

  animatedWordsIndex = (animatedWordsIndex + 1) % animatedWords.length;
}

function changeCopyrightPresentYear() {
  const date = new Date();
  let currentYear = date.getFullYear();
  let copyrightCurrentYearSpan = document.querySelector(
    "#copyrightCurrentYear"
  );

  copyrightCurrentYearSpan.innerHTML = currentYear;
}

changeCopyrightPresentYear();
