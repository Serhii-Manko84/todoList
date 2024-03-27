const input = document.querySelector(".container-form input");
const button = document.querySelector(".container-form button");
const list = document.querySelector(".container-list");

function checkInput() {
  if (input.value.trim() === "") {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
}

input.addEventListener("input", checkInput);

button.addEventListener("click", (event) => {
  event.preventDefault();
  const li = document.createElement("li");
  li.className = "list-item";
  li.innerText = input.value.trim();
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  li.appendChild(deleteButton);
  list.appendChild(li);
  input.value = "";
  button.disabled = true;

  deleteButton.addEventListener("click", () => {
    list.removeChild(li);
  });
});
