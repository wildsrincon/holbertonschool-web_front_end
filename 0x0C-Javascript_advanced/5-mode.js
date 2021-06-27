const body = document.body;
function changeMode(size, weight, transform, background, color) {
  return () => {
    body.style.fontSize = `${size}px`;
    body.style.fontWeight = weight;
    body.style.textTransform = transform;
    body.style.backgroundColor = background;
    body.style.color = color;
  };
}

function main() {
  const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  const screamMode = changeMode(12, "normal", "lowercase", "white", "black");

  // paragraph
  const para = document.createElement("p");
  const node = document.createTextNode("Welcome Holberton!");
  para.appendChild(node);
  body.appendChild(para);

  // Button Spooky
  let button = document.createElement("button");
  button.innerHTML = "Spooky";
  button.addEventListener('click', spooky);
  body.appendChild(button);

  // Button Dark Mode
  button = document.createElement("button");
  button.innerHTML = "Dark mode";
  button.addEventListener('click', darkMode);
  body.appendChild(button);

  // Button Scream Mode
  button = document.createElement("button");
  button.innerHTML = "Scream mode";
  button.addEventListener('click', screamMode);
  body.appendChild(button);
}

document.addEventListener("DOMContentLoaded", (e) => {
  main();
});
