// lazyload
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const lazyImage = entry.target;
        lazyImage.style.backgroundImage = `url(${lazyImage.dataset.src})`;
        observer.unobserve(lazyImage);
      }
    });
  });
  const lazyImages = document.querySelectorAll(".lazy");
  lazyImages.forEach((lazyImage) => {
    observer.observe(lazyImage);
  });
  document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('dropdownMenuIconButton');
    const dropdown = document.getElementById('dropdownDots');

    button.addEventListener('click', function () {
        dropdown.classList.toggle('hidden');
    });
});