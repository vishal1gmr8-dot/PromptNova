// ===============================
// COPY PROMPT
// ===============================

function copyPrompt(id) {

  const element = document.getElementById(id);

  if (!element) {
    return;
  }

  const text = element.innerText;

  navigator.clipboard.writeText(text)
    .then(() => {
      alert("✅ Prompt Copied!");
    })
    .catch(() => {
      alert("❌ Copy failed. Please try again.");
    });

}


// ===============================
// SEARCH
// ===============================

const search = document.getElementById("search");

if (search) {

  search.addEventListener("input", function () {

    const value = this.value.toLowerCase().trim();

    const cards = document.querySelectorAll(".prompt-card");

    cards.forEach(function (card) {

      const text = card.innerText.toLowerCase();

      if (text.includes(value)) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }

    });

  });

}


// ===============================
// CATEGORY FILTER
// ===============================

const buttons = document.querySelectorAll(".cat-btn");

buttons.forEach(function (button) {

  button.addEventListener("click", function () {

    const category = button.innerText
      .toLowerCase()
      .trim();

    const cards = document.querySelectorAll(".prompt-card");

    cards.forEach(function (card) {

      const cardCategory =
        card.dataset.category
          ? card.dataset.category.toLowerCase()
          : "";

      if (
        category === "all" ||
        cardCategory === category
      ) {

        card.style.display = "";

      } else {

        card.style.display = "none";

      }

    });

  });

});
