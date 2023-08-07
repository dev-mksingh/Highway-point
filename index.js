const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".label");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    sections.forEach((section) => {
      section.style.display = "none";
    });
    document.querySelector(
      `${e.currentTarget.getAttribute("href")}`
    ).style.display = "block";
  });
});
