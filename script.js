function copyPrompt(id) {
    const text = document.getElementById(id).innerText;
    navigator.clipboard.writeText(text);
    alert("✅ Prompt Copied!");
}
const search = document.getElementById("search");

if (search) {
  search.addEventListener("keyup", function () {
    const value = this.value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
      const text = card.innerText.toLowerCase();

      if (text.includes(value)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
}
const buttons = document.querySelectorAll(".cat-btn");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const category = button.innerText.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
      if (
        category === "all" ||
        card.dataset.category === category
      ) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
