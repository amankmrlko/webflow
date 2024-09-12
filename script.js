let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");

four.addEventListener("mouseenter", () => {
  two.style.transform = "translateX(0%)";
  four.style.transform = "translateX(0%)";
  three.style.transform = "translateX(0%)";
});

three.addEventListener("mouseenter", () => {
  two.style.transform = "translateX(0%)";
  four.style.transform = "translateX(80%)";
  three.style.transform = "translateX(0%)";
});

two.addEventListener("mouseenter", () => {
  two.style.transform = "translateX(0%)";
  four.style.transform = "translateX(80%)";
  three.style.transform = "translateX(80%)";
});

one.addEventListener("mouseenter", () => {
  two.style.transform = "translateX(80%)";
  four.style.transform = "translateX(80%)";
  three.style.transform = "translateX(80%)";
});

// slider

document.querySelectorAll(".slider-container").forEach((container) => {
  const slider = container.querySelector(".slider");
  const sections = slider.querySelectorAll(".section");
  let currentIndex = 0;
  const totalSections = sections.length;

  const sectionWidth = sections[0].offsetWidth;
  const gap = parseFloat(getComputedStyle(slider).gap);

  const updateSlide = (nextIndex) => {
    currentIndex = nextIndex;
    const offset = -(currentIndex * (sectionWidth + gap));
    slider.style.transform = `translateX(${offset}px)`;
  };

  const leftArrow = container.closest(".info").querySelector(".left");
  const rightArrow = container.closest(".info").querySelector(".right");

  leftArrow.addEventListener("click", () => {
    const nextIndex = (currentIndex - 1 + totalSections) % totalSections;
    updateSlide(nextIndex);
  });

  rightArrow.addEventListener("click", () => {
    const nextIndex = (currentIndex + 1) % totalSections;
    updateSlide(nextIndex);
  });
});

// blur hovering

let link = document.querySelector("#nav-links");
let blurs = document.querySelector(".blur");
link.addEventListener("mouseenter", () => {
  blurs.style.filter = "blur(8px)";
});
link.addEventListener("mouseleave", () => {
  blurs.style.filter = "blur(0px)";
});
