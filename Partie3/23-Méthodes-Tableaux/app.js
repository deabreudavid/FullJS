const tab = [1, 2, 3, 4, 5, 6];

///////////Pop, Push, Unshift, Shift ///////////

//Pop = efface la derniere valeur d'un tableau
tab.pop();

//Push = ajoute une valzeur à la fin d'un tableau
tab.push(50);

//Shift = supprime la premiere valeur d'un tableau
tab.shift();

//Unshift = ajout une valeur au début du tableau
tab.unshift(69);

console.log(tab);

////////// Splice, Slice //////////////

const tab2 = [1, 2, 3, 4, 5, 6];
const tab3 = [1, 2, 3, 4, 5, 6];

//Splice permet de supprimer ou ajouter une valeur d'un tableau a partir d'un index donné

//Supprimer les valeurs d'un tableau a partir d'un index donné
//  (index de départ / nombre de valeur a supprimer)
tab2.splice(0, 2);
console.log(tab2);

//Ajouter une valeur
//Index de départ // nombre de valeur a supprimer // et valeur à ajouter
tab3.splice(0, 0, 165);

//Slice retourne un nouveau tableau avec les valeurs d'un interval donné avec deux index
// (index de départ/ index de fin non inclus)
console.log(tab3.slice(0, 4));

console.log(tab3);

//////////////// Concat ///////////////
const tableau1 = [1, 2, 3, 4];
const tableau2 = [5, 6, 7, 8];

// on tente la fusion de deux tableaux mais ce n'est pas le résultat souhaité //
const tableau4 = tableau1 + tableau2;
console.log(tableau4);

// ici on concatene les deux tableaux pour obtenir un fusion des deux tableaux //
const tableau3 = tableau1.concat(tableau2);
console.log(tableau3);

////////// Flat //////
const multiTab = [1, 2, 3, 4, [5, 6, 7, 8]];
console.log(multiTab);
console.log(multiTab.flat());

////////// Join //////
const tableauString = ["David", "Fred", "Eric"];
console.log(tableauString);
console.log(tableauString.join(" "));

///////// For Each ////////
const tableauVoiture = ["Opel", "Peugeot", "Renault"];
console.log(tableauVoiture);
tableauVoiture.forEach(function tabV(element) {
  console.log(element);
});

////////// Map ///////////
const tableauNb = [1, 2, 3, 4, 5];
const resultMap = [tableauNb.map((x) => x * 2)];
console.log(resultMap);

///////// Reverse ///////////
const tabReverse = [1, 2, 3, 4, 5];
console.log(tabReverse.reverse());

//////// Filter ///////////
const tabFilter = ["John", "Jane", "Jack", "Patrick", "Anna", "Juanita"];
const resultFilter = tabFilter.filter(function (name) {
  return name.length > 4;
});
console.log(resultFilter)

//////// Reduce ///////
const tabReduce =[1,2,3,4,5,6]
const red = tabReduce.reduce(function(a,b){
    return a+b
}, 3)
console.log(red)

//////// Every ////////
const tabEvery =[1,2,3,4,5,6,7,8,9]
const eve = (value) => value < 10 // si je mets >10 le resultat serait false

console.log(tabEvery.every(eve)) //True

//////// Fill //////
const tabFill =[1,2,3,4,5,6,7,8,9]

console.log(tabFill.fill(0,2,4))
console.log(tabFill.fill(0, 2));
console.log(tabFill.fill(0));

//////// CopyWithin /////////

const tabCopy =[1,2,3,4,5,6,7,8,9]
console.log(tabCopy.copyWithin(1,4)) ///// a partir de l'index 1 on copie tout les indexes jusqu'au 4

//////// Entries //////////
const tabEnt = [1,2,3,4,5,6]
const entries =tabEnt.entries()
console.log(entries.next().value) //[0,1]
console.log(entries.next().value); //[1,2]
console.log(entries.next().value); //[2,3]
console.log(entries.next().value); //[3,4]
console.log(entries.next().value); //[4,5]
console.log(entries.next().value); //[5,6]
console.log(entries.next().value); // undefined car nous n'avons plus de valeurs dans notre tableau

//////// Sort /////// (trie les valeurs par ordre)
const listName = ["John", "Jane", "Jack", "Patrick", "Anna", "Juanita"];
listName.sort()
console.log(listName)

const listNumber =[0,9,7,8,3,6,5,1,2,4]
listNumber.sort()
console.log(listNumber)

