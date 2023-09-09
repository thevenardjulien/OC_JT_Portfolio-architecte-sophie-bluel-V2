export function titleObs() {
  const observer = new IntersectionObserver((entries) => {
    for (let entry of entries) {
      if (entry.isIntersecting) {
        entry.target.animate(
          [
            { transform: "translateX(-20px)", opacity: 0 },
            { transform: "translateX(0px)", opacity: 1 },
          ],
          { duration: 300 }
        );
      }
    }
  });
  const titles = document.querySelectorAll("h2");
  for (let title of titles) {
    observer.observe(title);
  }
}
