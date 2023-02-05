const box = document.querySelector(".box");

document.addEventListener("mouseup", () => {
  box.classList.add("active");
});

//click =1 click box.addEventListener
//dblclick= double click box.addEventListener
//load directement sur le document.addEventListener
//keydown lorsqu'une touche est appuyée
//keypress  lorsqu'une touche est maintenue appuyée
//keyup lorsqu'une touche est relachée
//mouseenter lorsque le curseur passe sur l'element
//mouseup l'inverse
//mouseleave lorsque le curseur quitte l'element
//mouseout lorsque le curseur quitte l'element
// mousemoove quand la souris parcoure l'element (mais il faut mettre box.addEventListener("mousemoove", () => {
// box.classList.add("active");});
//mousedown appuyer sur la souris lorsqu'on est sur l'element
//select quand on selectionne
//change quand il y a un changement de valeur
//submit formulaire
//focus pour les inputs
//blur lorsque l'input perd le focus
//scroll...

//liste evenement en JS si besoin sur MDN
