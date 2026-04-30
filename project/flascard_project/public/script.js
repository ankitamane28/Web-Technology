let cards = [];
let index = 0;
let flipped = false;

// DOM elements
const cardDiv = document.getElementById("card");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const deleteBtn = document.getElementById("deleteBtn");
const addBtn = document.getElementById("addBtn");
const counter = document.getElementById("counter");

// 🔄 Load cards from server
function loadCards() {
  fetch("/cards")
    .then(res => res.json())
    .then(data => {
      cards = data;
      index = 0;
      showCard();
    })
    .catch(err => console.log(err));
}

// 🖥️ Show card
function showCard() {
  if (cards.length === 0) {
    cardDiv.innerText = "No Cards";
    counter.innerText = "";
    return;
  }

  flipped = false;
  cardDiv.innerText = cards[index].question;
  counter.innerText = `Card ${index + 1} of ${cards.length}`;
}

// 🔁 Flip card
cardDiv.addEventListener("click", () => {
  if (cards.length === 0) return;

  if (!flipped) {
    cardDiv.innerText = cards[index].answer;
    flipped = true;
  } else {
    cardDiv.innerText = cards[index].question;
    flipped = false;
  }
});

// ➡ Next
nextBtn.addEventListener("click", () => {
  if (cards.length === 0) return;

  index = (index + 1) % cards.length;
  showCard();
});

// ⬅ Previous
prevBtn.addEventListener("click", () => {
  if (cards.length === 0) return;

  index = (index - 1 + cards.length) % cards.length;
  showCard();
});

// ❌ Delete card
deleteBtn.addEventListener("click", () => {
  if (cards.length === 0) {
    alert("No cards to delete");
    return;
  }

  fetch(`/cards/${index}`, {
    method: "DELETE"
  })
    .then(() => loadCards())
    .catch(err => console.log(err));
});

// ➕ Add card (WITH INPUT CLEAR ✅)
addBtn.addEventListener("click", () => {
  let qInput = document.getElementById("q");
  let aInput = document.getElementById("a");

  let q = qInput.value.trim();
  let a = aInput.value.trim();

  if (!q || !a) {
    alert("Fill both fields");
    return;
  }

  fetch("/cards", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ question: q, answer: a })
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);

      loadCards();

      // ✅ Clear inputs
      qInput.value = "";
      aInput.value = "";
    })
    .catch(err => console.log(err));
});

// 🚀 Initial load
loadCards();