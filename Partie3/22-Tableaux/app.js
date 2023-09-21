const tab = [1, 2, 3, 4, 5];

//index 1, 2, 3, 4, 5

const tab2 = ["David", 3, { marque: "opel", annee: 2019 }];

console.log(tab);
console.log(tab2);

// acceder à une valeur du tableau
console.log(tab[2]); // par exemple

// changer la valeur d'un index
tab[0] = "Fred";
console.log(tab2);

// length longueur du tableau
console.log(tab.lenght);

// at = obtenir la valeur d'un tableau
console.log(tab.at(2));