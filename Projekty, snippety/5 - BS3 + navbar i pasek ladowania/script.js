const progBar = document.querySelector(".progress-bar");

const addWidth = () => {
  let progress = Math.round(
    (window.scrollY /
      (document.documentElement.offsetHeight - window.innerHeight)) *
      100
  );

  progBar.style.width = `${progress}%`;
};
window.addEventListener("scroll", addWidth);
