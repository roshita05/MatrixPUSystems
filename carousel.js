document.querySelectorAll("[data-carousel]").forEach(carousel => {
  let index = 0;
  const images = carousel.querySelectorAll("img");

  setInterval(() => {
    images[index].classList.remove("active");
    index = (index + 1) % images.length;
    images[index].classList.add("active");
  }, 2500);
});
