const title1 = document.querySelector("h1");
const title2 = document.querySelector("h2");
const box = document.querySelector(".box");
const list = document.querySelector("ul");
const img = document.querySelector("img");
const form = document.querySelector("form");
const input = document.querySelector("#test");

//innerText permet d'ajouter du texte

title1.innerText = "ajout1 de texte";

//textContent permet d'ajouter du texte

title2.textContent = "ajout2 de texte";

//innerHTML ajoute du HTML
box.innerHTML = `<p>Hey html</p>`;

//creer des elements HTML
let newLi = document.createElement("li");
newLi.innerText = "new LI";
list.appendChild(newLi);

//replaceWith pour choisir l'ordre de l'élément
list.children[1].replaceWith(newLi);

//style changement de couleur de la box
box.style.background = "#333";

//changement de source d'image accèder à l'attribut image (modification de la sources immage src)
img.src =
  "https://images.unsplash.com/photo-1675410541565-af66672ad1f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=60";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let val = input.value;
  console.log(val);
  title1.innexText = `${val}`;
});

//récupérer les coordonnées de la souris

const cor = document.querySelector(".cor");
let y = 0;
let x = 0;

window.addEventListener("mousemove", (even) => {
  x = even.clientX;
  y = even.clientY;

  cor.textContent = `X : ${x} Y ${y}`;
});
