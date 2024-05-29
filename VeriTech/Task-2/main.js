const scrollRevealoption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};
ScrollReveal().reveal(".header_image img", {
  ...scrollRevealoption,
  origin: "right",
});
ScrollReveal().reveal(".header_content h1", {
  ...scrollRevealoption,
  delay: 500,
});
ScrollReveal().reveal(".header_content p", {
  ...scrollRevealoption,
  delay: 1000,
});
ScrollReveal().reveal(".header_content form", {
  ...scrollRevealoption,
  delay: 1500,
});
