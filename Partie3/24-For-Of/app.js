const tab = [1, 2, 3, 4, 5];

////// Boucle classique //////
for (let i = 0; i < tab.length; i++) {
  console.log(i);
}

////////// Boucle for of ///////// Ne fonctionne qu'avec les tableaux
const tabName = ["David", "Fred", "Eric"];
for (let name of tabName) {
  console.log(tabName.indexOf(name)); //// Sort uniquement les index et pour sortir les valeurs:
  console.log(tabName.indexOf(name), name);///// sort les indexes et les valeurs
}
