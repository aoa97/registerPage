const inputs = document.querySelectorAll("input");
const form = document.querySelector("form");
const submit = document.getElementById("submit");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Create Message Node
  const createMessage = (input) => {
    const msg = document.createElement("span");
    msg.textContent = `${input} cannot be empty`;
    msg.classList.add("empty-msg");
    return msg;
  };

  // Empty fields case
  inputs.forEach((i) => {
    if (i.value.length === 0) {
      i.classList.add("empty");
      const msg = createMessage(i.placeholder);
      i.after(msg);
      submit.setAttribute("disabled", "disabled");
    }
  });
});
