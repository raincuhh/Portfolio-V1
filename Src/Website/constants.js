window.addEventListener("DOMContentLoaded", () => {
  pagePreLoader();

  function downHeader() {
    window.onscroll = () => {
      let root = document.documentElement;
      gsap.to(root, {
        duration: 0.3,
        ease: "power4.inout",
        "--text-inactive-r": 119,
        "--text-inactive-g": 119,
        "--text-inactive-b": 119,
      });
    };

    let header = document.querySelector(".topHeader");
    setTimeout(() => {
      gsap.to(header, {
        y: 0,
        ease: "power4.inout",
      });
    }, 3270);
  }
  downHeader();
});

//preloader
function pagePreLoader() {
  let logo = document.querySelector(".preLoader .logoFrame");
  let placeholderFrame = document.querySelector(".preLoader .placeholderFrame");
  let grayFrame = document.querySelector(".preLoader .grayFrame");
  let blackFrame = document.querySelector(".preLoader .blackFrame");
  let preLoaderTL = gsap.timeline();

  preLoaderTL
    .fromTo(
      grayFrame,
      { duration: 2.2, scaleX: 0 },
      {
        duration: 2,
        scaleX: 1,
        transformOrigin: "left",
        ease: "power4.inOut",
      }
    )
    .fromTo(
      blackFrame,
      { duration: 2.7, scaleX: 0 },
      {
        duration: 1.8,
        scaleX: 1,
        transformOrigin: "left",
        ease: "power4.inOut",
      },
      0.35
    )
    .fromTo(
      logo,
      { duration: 2.4, xPercent: -40, opacity: 0 },
      { duration: 1.2, xPercent: 0, opacity: 1, ease: "power4.inOut" },
      0.7
    )
    .set(grayFrame, {
      scaleX: 0,
    })
    .to(blackFrame, {
      duration: 1.5,
      scaleX: 0,
      transformOrigin: "right",
      ease: "power4.inOut",
    })
    .to(
      logo,
      {
        duration: 0.125,
        opacity: 0,
      },
      "-=1"
    )
    .to(
      placeholderFrame,
      {
        duration: 0.1,
        opacity: 0,
      },
      "-=1.5"
    );
}

window.onbeforeunload = () => {
  window.scrollTo(0, 0);
};

//custom cursor
function cursor() {
  const cursorDot = document.querySelector("[data-cursor-dot]");
  const cursorOutline = document.querySelector("[data-cursor-outline]");

  window.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    //console.log(posX);
    //console.log(posY);

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    //cursorOutline.style.left = `${posX}px`;
    //cursorOutline.style.top = `${posY}px`;

    cursorOutline.animate(
      {
        left: `${posX}px`,
        top: `${posY}px`,
      },
      {
        duration: 500,
        fill: "forwards",
      }
    );
  });
}
cursor();

// hamburger

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

function hamburgerAnimations() {
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
}
hamburgerAnimations();

// navbar

function navbar() {
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
    //console.log("clickedShade");
    closeNavbar();
  }

  function openNavbar() {
    console.log("openingMenu");
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
          duration: 0.5,
          x: 170,
          opacity: 0,
          ease: "power4.inOut",
        },
        "-=0.5"
      )
      .to(
        hamburgerClosed,
        {
          duration: 0.5,
          x: 0,
          opacity: 1,
          ease: "power4.inOut",
        },
        "-=0.5"
      );

    menuOpen = true;
    console.log(menuOpen);
  }

  function closeNavbar() {
    console.log("closingMenu");
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
          duration: 0.5,
          x: 0,
          opacity: 1,
          ease: "power4.inOut",
        },
        "-=0.5"
      )
      .to(
        hamburgerClosed,
        {
          duration: 0.5,
          x: 170,
          opacity: 0,
          ease: "power4.inOut",
        },
        "-=0.5"
      );
    menuOpen = false;
    console.log(menuOpen);
  }
}
navbar();
