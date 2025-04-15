function changeText() {
  const heading = document.getElementById("dynamic-text");
  heading.textContent = "Antarctica: A Land of Ice, Mystery, and Science";
}

function changeStyle() {
  const heading = document.getElementById("dynamic-text");
  heading.style.color = "#00bcd4";
  heading.style.fontSize = "36px";
  heading.style.fontWeight = "bold";
}

function toggleElement() {
  const container = document.getElementById("container");
  const existing = document.getElementById("antarctica-fact");

  if (existing) {
    container.removeChild(existing);
  } else {
    const fact = document.createElement("p");
    fact.id = "antarctica-fact";
    fact.textContent = "Did you know? Antarctica contains about 70% of the world's fresh water, locked in its ice sheets.";
    container.appendChild(fact);
  }
}
