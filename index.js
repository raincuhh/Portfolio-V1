window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    setInterval(iterateThroughThingsIDevelop, 2000);
  }, 2000);
});

let animatedWords = ["websites", "apps", "games", "ux/ui", "things"];
let animatedWordsCurrentIndex = 0;

function iterateThroughThingsIDevelop() {
  let animatedSpan = document.querySelector("#animatedBitSpan");

  //console.log(animatedSpanWords[animatedSpanWordCurrentIndex]);
  animatedSpan.innerHTML = animatedWords[animatedWordsCurrentIndex];

  animatedWordsCurrentIndex =
    (animatedWordsCurrentIndex + 1) % animatedWords.length;
  //animatedSpan.innerHTML = words[Math.floor(Math.random() * 4)];
}

function interpolateValues(startValue, endValue, progress) {
  return startValue + (endValue - startValue) * progress;
}

//idea, make footer copyright present year a gsap scrolltrigger from earliest copyright date to newest
//for example it scrolls like  ©2024-2024>2025>2026...

function changeCopyrightPresentYear() {
  const date = new Date();
  let currentYear = date.getFullYear();
  let copyrightPresentYearSpan = document.querySelector(
    "#copyrightPresentYear"
  );

  copyrightPresentYearSpan.innerHTML = currentYear;
}

changeCopyrightPresentYear();
