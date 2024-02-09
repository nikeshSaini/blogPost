document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const navbar = document.querySelector("nav");

  menuIcon.addEventListener("click", function (event) {
    // If the navbar is open and the click event didn't originate from the hamburger icon, don't close the navbar
    if (
      navbar.classList.contains("slide") &&
      !menuIcon.contains(event.target)
    ) {
      return;
    }

    navbar.classList.toggle("slide"); // Toggle the open class on click
  });

  // Close the navbar when clicking outside of it
  document.addEventListener("click", function (event) {
    if (!navbar.contains(event.target) && !menuIcon.contains(event.target)) {
      navbar.classList.remove("open");
    }
  });
});
