// > Sur base de l'html fourni :

// # 1. En utilisant une boucle pour appliquer un écouteur d'événement sur chaque "li", créer un programme qui permet de lancer une function du nom de sayMyName qui affiche une alert du texte du li sur le quel on clique.
// let exo1 = document.querySelector('ul')
// let rep = exo1.childNodes
// console.log(rep);
// rep.forEach(element => {
//     console.log(element);
//     element.addEventListener('dblclick',function sayMyName(){
        
//         alert(element.textContent);

// });})



// # 2. En utilisant le meme procédé qu'au dessus Créer un programme qui permet de modifier le contenu de chaque Li en double cliquant dessus via un prompt(attention peut-être que tu devras commenter l'exercice précédent)
let exo2 = document.querySelector('ul')
let rep2 = exo2.childNodes

rep2.forEach(element => {
    
    element.addEventListener('click',function changeMyName(){
        let change = prompt('ecrit un mot')
            element.textContent = change;
});})



// # 3. Créer un programme qui permet d'inverser l'ordre de deux li ! avec l'aide des inputs et du button inverser

let butt = document.querySelectorAll('input')[2]

butt.addEventListener('click', () => {
    let li1 = document.querySelector('div label')
   console.log(li1);
    let li2 = document.querySelectorAll('div label')[1]
    console.log(li2);

    let a = li1.textContent

    li1.innerHTML = li2.innerHTML

    li2.textContent=a

})
