//ex1
const btn = document.querySelector('#monBouton');
const div = document.querySelector('#maDiv');

btn.addEventListener('click', () => {
  div.textContent = 'Nouveau texte';
});

//ex2:

const vars=document.createElement('p');
vars.textContent='hello';
div.appendChild(vars);


const vas=document.createElement('button');
vas.textContent='console';
div.appendChild(vas);

vas.addEventListener('click', () => {
  console.log("clicked");
});



//ex3

const color=document.createElement('button');
color.textContent='theme';
div.appendChild(color);

color.addEventListener('click', () => {
  const e = document.querySelector('div');
  
  e.style.backgroundColor = 'lightblue';
  e.style.fontSize = '20px';

  
});


//ex4

let button = document.querySelector("#monBouton"); 
 button.addEventListener("click", function() { 
     
document.querySelector("#maDiv").innerText = "Le texte a changé !"; 
 }); 

