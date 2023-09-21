const liste = document.querySelector("ul");
const items = document.querySelectorAll("li");

//children = parent's childs
console.log(liste.children);

//childNodes (noeuds) les retours a la ligne sont considérés comme des noeuds en JS
console.log(liste.childNodes);

//parentElement = renvoi le parent du parent
console.log(liste.parentElement);

//nextElementSibling = noeud frere qui suit mon élément
console.log(liste.nextElementSibling);

//nextSibling = noeud frere qui suit mon élément
console.log(liste.nextSibling);

//previousElementSibling = element frere avant mon élément
console.log(liste.previousElementSibling);

//lastElementChild = me renvoie le dernier enfant
console.log(liste.lastElementChild);

//firstElementChild = me renvoie le premier enfant
console.log(liste.firstElementChild);
