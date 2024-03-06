window.addEventListener("DOMContentLoaded", () => {
  //console.log("domcontent loaded");
  let intro = document.querySelector(".intro");
  let introLabel = document.querySelectorAll(".introLabel");
  let header = document.querySelector(".header");

  setTimeout(() => {
    introLabel.forEach((span, i) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (i + 1) * 225);
    });

    setTimeout(() => {
      introLabel.forEach((span, i) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("fade");
        }, (i + 1) * 225);
      });
    }, 2750);

    setTimeout(() => {
      gsap.to(intro, {
        duration: 0.3,
        top: "-150dvh",
        ease: "power4.inOut",
      });
      //intro.style.top = "-150dvh";
    }, 3800);

    setTimeout(() => {
      gsap.to(header, {
        y: 0,
      });
    }, 4700);
  }, 0);
});

let navbarToggleButton = document.querySelector("#navbarToggleButton");
let navbar = document.querySelector(".navbar .content");
let menuOpen = false;
let navbarTL = gsap.timeline();

navbarToggleButton.addEventListener("click", toggleNavbar);

function toggleNavbar() {
  navbarToggleButton.removeEventListener("click", toggleNavbar);

  if (!menuOpen) {
    //console.log("openingMenu");
    navbarTL
      .to(":root", {
        duration: 1,
        "--nl": "100%",
        "--nr": "86%",
        ease: "power4.inOut",
      })
      .eventCallback("onComplete", () => {
        navbarToggleButton.addEventListener("click", toggleNavbar);
      });
    menuOpen = true;
  } else {
    //console.log("closingMenu");
    navbarTL
      .to(":root", {
        duration: 1,
        "--nl": "0%",
        "--nr": "0%",
        ease: "power4.inOut",
      })
      .eventCallback("onComplete", () => {
        navbarToggleButton.addEventListener("click", toggleNavbar);
      });
    menuOpen = false;
  }
}

/*
navbarToggleButton.addEventListener("click", () => {
  if (!menuOpen) {
    navbarTL.to(":root", {
      duration: 1,
      "--nl": "100%",
      "--nr": "86%",
      ease: "power4.inOut",
      //
      onUpdate: function (progress) {
        console.log("Progress:", progress); // Debug
        const INTERPOLATED_VALUE = interpolateValues(86, 70, progress);
        console.log("Interpolated value:", INTERPOLATED_VALUE); // Debug
        document.documentElement.style.setProperty(
          "--nr",
          INTERPOLATED_VALUE + "%"
        );
      },
      //
    });
    menuOpen = true;
  } else {
    navbarTL.to(":root", {
      duration: 1,
      "--nl": "0%",
      "--nr": "0%",
      ease: "power4.inOut",
      
      onUpdate: function (progress) {
        console.log("Progress:", progress); // Debug
        const INTERPOLATED_VALUE = interpolateValues(70, 86, progress);
        console.log("Interpolated value:", INTERPOLATED_VALUE); // Debug
        document.documentElement.style.setProperty(
          "--nr",
          INTERPOLATED_VALUE + "%"
        );
      },
      
    });
    menuOpen = false;
  }
});
*/

function interpolateValues(startValue, endValue, progress) {
  return startValue + (endValue - startValue) * progress;
}
