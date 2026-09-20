const topBtn = document.getElementById("topBtn");

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


document.querySelectorAll(".like").forEach(button => {
  button.addEventListener("click", () => {
    button.textContent = button.textContent === "👍" ? "❤️" : "👍";
  });
});


document.querySelectorAll(".comment").forEach(button => {
  button.addEventListener("click", () => {
    alert("Comments feature coming soon!");
  });
});


document.querySelectorAll(".share").forEach(button => {
  button.addEventListener("click", () => {
    alert("Post shared!");
  });
});