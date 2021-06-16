const body = document.body;
const heading = document.querySelector('h1');

heading.style.fontSize = "5rem"

body.addEventListener('mousemove', runEvent);

// Event Handler
function runEvent(e) {
  heading.textContent= `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}