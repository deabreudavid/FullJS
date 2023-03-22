//fonctions classiques

function exemple() {
  console.log("hello");
}
exemple();

let name = "david";
//return
function nam() {
  return name;
}
console.log(nam());

//parametre dans les fonctions
function calcul(nb1, nb2) {
  return nb1 + nb2;
}
console.log(calcul(2, 4));

//function flechée = fonction anonyme (obligé de la mettre dans une variable)
const funcFlech = () => name;
const op = (nb1, nb2) => nb1 + nb2;

console.log(funcFlech());
console.log(op(4, 6));

//fonction callback = fonction qui appelle une autre fonction comme argument
function funcCall(callback) {
  callback();
}
funcCall(function () {
  console.log("super text");
});
