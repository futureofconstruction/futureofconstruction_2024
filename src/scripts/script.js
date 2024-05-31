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
    const button = document.getElementById('menuIcon');
    const dropdown = document.getElementById('menu');
    const dropdownItems = dropdown.querySelectorAll('a');

    // Toggle the dropdown menu when the button is clicked
    button.addEventListener('click', function () {
        dropdown.classList.toggle('hidden');
    });

    // Close the dropdown menu when an item is clicked
    dropdownItems.forEach(item => {
        item.addEventListener('click', function () {
            dropdown.classList.add('hidden');
        });
    });

    // Close the dropdown menu when clicking outside of it
    document.addEventListener('click', function (event) {
        const isClickInside = dropdown.contains(event.target) || button.contains(event.target);

        if (!isClickInside) {
            dropdown.classList.add('hidden');
        }
    });
});
