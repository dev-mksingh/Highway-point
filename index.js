const inputs = document.querySelectorAll("input");
const sections = document.querySelectorAll("section");

inputs.forEach((input) => {
  input.addEventListener("click", (e) => {
    sections.forEach((section) => (section.style.display = "none"));
    document.querySelector(`.${e.currentTarget.value}`).style.display = "block";
  });
});
