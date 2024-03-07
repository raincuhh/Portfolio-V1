window.addEventListener("DOMContentLoaded", () => {
  //console.log("domcontent loaded");
  let intro = document.querySelector(".intro");
  let introLabel = document.querySelectorAll(".introLabel");
  let header = document.querySelector(".header");
  //let preLoader = gsap.timeline();

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
        ease: "power4.inout",
      });
    }, 4400);
  }, 0);
});

let hamburger = document.querySelector(".hamburger");

let hamburgerOpen = document.querySelector(".hamburger .inner .hamburgerOpen");
let hamburgerClosed = document.querySelector(
  ".hamburger .inner .hamburgerClosed"
);

let hamburgerLinesOpen = document.querySelectorAll(
  ".hamburger .inner .hamburgerOpen .line"
);
let hamburgerLinesClosed = document.querySelectorAll(
  ".hamburger .inner .hamburgerClosed .line"
);
let initialLineWidths = Array.from(hamburgerLinesOpen).map(
  (line) => line.offsetWidth
);

hamburger.addEventListener("mouseover", () => {
  gsap.to(hamburgerLinesOpen, {
    duration: 0.2,
    width: 20,
    ease: "power4.out",
  });
});

hamburger.addEventListener("mouseout", () => {
  gsap.to(hamburgerLinesOpen, {
    duration: 0.2,
    width: (index) => initialLineWidths[index],
    ease: "power4.out",
  });
});

let navbarToggleButton = document.querySelector("#navbarToggleButton");
let navbar = document.querySelector(".navbar .content");
let navbarShade = document.querySelector(".navbar .shade");
let menuOpen = false;
let navbarTL = gsap.timeline();

navbarToggleButton.addEventListener("click", toggleNavbar);
navbarShade.addEventListener("click", shadeClosing);

function toggleNavbar() {
  navbarToggleButton.removeEventListener("click", toggleNavbar);
  if (!menuOpen) {
    openNavbar();
  } else {
    closeNavbar();
  }
}

function shadeClosing() {
  navbarShade.removeEventListener("click", shadeClosing);
  //slight delay problem when i click shade then trying to open navbar again
  console.log("clickedShade");
  closeNavbar();
}

function openNavbar() {
  //console.log("openingMenu");
  navbarTL
    .to(":root", {
      duration: 0.8,
      "--nl": "100%",
      "--nr": "86%",
      ease: "power4.inOut",
    })
    .eventCallback("onComplete", () => {
      navbarToggleButton.addEventListener("click", toggleNavbar);
    })
    .to(
      navbarShade,
      {
        duration: 0.8,
        opacity: 1,
        ease: "power4.inOut",
        onComplete: () => {
          navbarShade.style.pointerEvents = "auto";
        },
      },
      "-=0.9"
    )
    .to(
      hamburgerOpen,
      {
        x: 170,
        opacity: 0,
      },
      "-=0.9"
    )
    .to(
      hamburgerClosed,
      {
        x: 0,
        opacity: 1,
      },
      "-=0.9"
    );

  menuOpen = true;
  console.log(menuOpen);
}

function closeNavbar() {
  //console.log("closingMenu");
  navbarTL
    .to(":root", {
      duration: 0.8,
      "--nl": "0%",
      "--nr": "0%",
      ease: "power4.inOut",
    })
    .eventCallback("onComplete", () => {
      navbarToggleButton.addEventListener("click", toggleNavbar);
      navbarShade.addEventListener("click", shadeClosing);
    })
    .to(
      navbarShade,
      {
        duration: 0.8,
        opacity: 0,
        ease: "power4.inOut",
        onComplete: () => {
          navbarShade.style.pointerEvents = "none";
        },
      },
      "-=0.7"
    )
    .to(
      hamburgerOpen,
      {
        x: 0,
        opacity: 1,
      },
      "-=0.9"
    )
    .to(
      hamburgerClosed,
      {
        x: 170,
        opacity: 0,
      },
      "-=0.9"
    );
  menuOpen = false;
  console.log(menuOpen);
}

/*
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
    navbarTL.to(
      navbarShade,
      {
        duration: 1,
        opacity: 1,
        ease: "power4.inOut",
      },
      "-=0.9"
    );
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
    navbarTL.to(
      navbarShade,
      {
        duration: 1,
        opacity: 0,
        ease: "power4.inOut",
      },
      "-=0.9"
    );
    menuOpen = false;
  }
}
*/

function interpolateValues(startValue, endValue, progress) {
  return startValue + (endValue - startValue) * progress;
}
