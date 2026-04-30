const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.static("public"));

let cards = [
  { question: "Capital of India?", answer: "New Delhi" },
  { question: "2 + 2?", answer: "4" },
  { question: "Sun rises from?", answer: "East" }
];

// GET all cards
app.get("/cards", (req, res) => {
  res.json(cards);
});

// ADD card
app.post("/cards", (req, res) => {
  cards.push(req.body);
  res.json({ message: "Card added" });
});

// DELETE card
app.delete("/cards/:index", (req, res) => {
  cards.splice(req.params.index, 1);
  res.json({ message: "Card deleted" });
});

// UPDATE card
app.put("/cards/:index", (req, res) => {
  cards[req.params.index] = req.body;
  res.json({ message: "Card updated" });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});