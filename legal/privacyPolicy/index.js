document.addEventListener("DOMContentLoaded", () => {
  let header = document.querySelector(".topHeader");
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
      //root.style.setProperty("--text-base", "var(--text-119)");
    };
    setTimeout(() => {
      gsap.to(header, {
        y: 0,
        ease: "power4.inout",
      });
    }, 3270);
  }
  downHeader();
});
