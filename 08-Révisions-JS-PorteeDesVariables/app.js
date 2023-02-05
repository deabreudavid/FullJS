//l'ordre est important. déclarer les const avant les fonction. Sauf pour la VAR qui a une portee scope (on peut accèder a la var n'importe ou)

let prenom = "david";

function pren() {
  return prenom;
}
console.log(pren());
