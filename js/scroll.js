const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 1500,
  reset: true,
});

// Scroll Jumbotron
sr.reveal(".jumbotron", {});
sr.reveal(".display-4", { delay: 200 });
sr.reveal(".lead", { delay: 400 });
sr.reveal(".scrol1", { interval: 200 });
