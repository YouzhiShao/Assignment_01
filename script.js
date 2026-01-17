"use strict";

/* =========================
   Sample Data
   ========================= */
const characters = [
  { id: 1, name: "Luke Skywalker", age: 23 },
  { id: 2, name: "Darth Vader", age: 45 },
  { id: 3, name: "Princess Leia", age: 23 },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 },
  { id: 5, name: "Yoda", age: 900 },
  { id: 6, name: "Han Solo", age: 32 },
  { id: 7, name: "Chewbacca", age: 234 },
  { id: 8, name: "R2-D2", age: 33 },
  { id: 9, name: "C-3PO", age: 112 },
  { id: 10, name: "Padmé Amidala", age: 27 },
];

/* Broken data for Exercise 6 */
const brokenCharacters = [
  { id: 1, age: 20 },
  { id: 2 },
  { id: 3, name: "Valid Name", age: 30 },
];

/* =========================
   Utility Functions
   ========================= */
function createListItem(text) {
  const li = document.createElement("li");
  li.textContent = text;
  return li;
}

function displayError(message, targetId) {
  console.error(message);
  const errorContainer = document.getElementById(targetId);
  if (errorContainer) {
    const p = document.createElement("p");
    p.className = "error-message";
    p.textContent = message;
    errorContainer.appendChild(p);
  }
}

/* =========================
   Exercise 1: Print Character Names
   ========================= */
const namesList = document.getElementById("names-list");
characters.forEach((char) => {
  namesList.appendChild(createListItem(char.name));
});

/* =========================
   Exercise 2: Filter by Age (< 40)
   ========================= */
const youngList = document.getElementById("young-characters-list");
characters
  .filter((char) => char.age < 40)
  .forEach((char) => {
    youngList.appendChild(createListItem(char.name));
  });

/* =========================
   Exercise 3: Reusable Function
   ========================= */
function renderList(array, listId) {
  const list = document.getElementById(listId);
  array.forEach((char) => {
    if (char.name) {
      list.appendChild(createListItem(char.name));
    }
  });
}
renderList(characters, "function-list");

/* =========================
   Exercise 4: Age Filter Function
   ========================= */
function filterAndRenderByAge(array, maxAge, listId) {
  const list = document.getElementById(listId);
  const filtered = array.filter((char) => char.age < maxAge);
  filtered.forEach((char) => {
    list.appendChild(createListItem(char.name));
  });
}
filterAndRenderByAge(characters, 40, "age-filter-list");

/* =========================
   Exercise 5: Error Handling
   ========================= */
function renderWithErrorHandling(array, listId, errorId) {
  const list = document.getElementById(listId);

  array.forEach((char) => {
    try {
      if (!char.name) {
        throw new Error(`Missing name for character ID: ${char.id}`);
      }
      list.appendChild(createListItem(char.name));
    } catch (err) {
      displayError(err.message, errorId);
    }
  });
}
// Exercise 5
renderWithErrorHandling(characters, "error-handling-list", "error-messages");

/* =========================
   Exercise 6: Test with Broken Array
   ========================= */
renderWithErrorHandling(
  brokenCharacters,
  "broken-array-list",
  "broken-array-errors",
);
