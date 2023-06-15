// * creation de div

let div_1 = document.createElement("div");

let div_2 = document.createElement("div");

let div_3 = document.createElement("div");

let div_4 = document.createElement("div");

let div_5 = document.createElement("div");

let div_6 = document.createElement("div");

let div_7 = document.createElement("div");

let div_8 = document.createElement("div");

// ? cibler container

let container = document.querySelector(".container");
container.style.display="none";
// container.setAttribute("class","d-none")

// & donnez à la div une class tout qui à déja créer en css
div_1.setAttribute("class", "tout pokemon1");
div_2.setAttribute("class", "tout pokemon2");
div_3.setAttribute("class", "tout pokemon3");
div_4.setAttribute("class", "tout pokemon4");
div_5.setAttribute("class", "tout pokemon5");
div_6.setAttribute("class", "tout pokemon6");
div_7.setAttribute("class", "tout pokemon7");
div_8.setAttribute("class", "tout pokemon8");

// * creer une image

let img_dos1 = document.createElement("img");
img_dos1.setAttribute("src", "./public/img/dos_carte.jpg");

let img_dos2 = document.createElement("img");
img_dos2.setAttribute("src", "./public/img/dos_carte.jpg");

let img_dos3 = document.createElement("img");
img_dos3.setAttribute("src", "./public/img/dos_carte.jpg");

let img_dos4 = document.createElement("img");
img_dos4.setAttribute("src", "./public/img/dos_carte.jpg");

let img_dos5 = document.createElement("img");
img_dos5.setAttribute("src", "./public/img/dos_carte.jpg");

let img_dos6 = document.createElement("img");
img_dos6.setAttribute("src", "./public/img/dos_carte.jpg");

let img_dos7 = document.createElement("img");
img_dos7.setAttribute("src", "./public/img/dos_carte.jpg");

let img_dos8 = document.createElement("img");
img_dos8.setAttribute("src", "./public/img/dos_carte.jpg");

let img_1 = document.createElement("img");
img_1.setAttribute("src", "./public/img/pokemon1.jpg");
img_1.setAttribute("class", "d-none");


let img_2 = document.createElement("img");
img_2.setAttribute("src", "./public/img/pokemon2.jpg");
img_2.setAttribute("class", "d-none");


let img_3 = document.createElement("img");
img_3.setAttribute("src", "./public/img/pokemon3.jpg");
img_3.setAttribute("class", "d-none");


let img_4 = document.createElement("img");
img_4.setAttribute("src", "./public/img/pokemon4.jpg");
img_4.setAttribute("class", "d-none");


let img_5 = document.createElement("img");
img_5.setAttribute("src", "./public/img/pokemon5.jpg");
img_5.setAttribute("class", "d-none");


let img_6 = document.createElement("img");
img_6.setAttribute("src", "./public/img/pokemon6.jpg");
img_6.setAttribute("class", "d-none");


let img_7 = document.createElement("img");
img_7.setAttribute("src", "./public/img/pokemon7.jpg");
img_7.setAttribute("class", "d-none");


let img_8 = document.createElement("img");
img_8.setAttribute("src", "./public/img/pokemon9.jpg");
img_8.setAttribute("class", "d-none");


div_1.appendChild(img_1);
div_1.appendChild(img_dos1);

div_2.appendChild(img_2);
div_2.appendChild(img_dos2);

div_3.appendChild(img_3);
div_3.appendChild(img_dos3);

div_4.appendChild(img_4);
div_4.appendChild(img_dos4);

div_5.appendChild(img_5);
div_5.appendChild(img_dos5);

div_6.appendChild(img_6);
div_6.appendChild(img_dos6);

div_7.appendChild(img_7);
div_7.appendChild(img_dos7);

div_8.appendChild(img_8);
div_8.appendChild(img_dos8);

// container.appendChild(div_1)
let score = document.querySelector(".score_j");
let count =0;
// * creation de tableau contient tous les div

let tab_divs = [div_1, div_2, div_3, div_4, div_5, div_6, div_7, div_8];
for (let index = 0; index < tab_divs.length; index++) {
  const element = tab_divs[index];
}
// * variable temporaire pour tab
const facile_aleatoire = () => {
  push_aleatoire = [];
  tab_divs_aleatoire = [];
  tab_divs_aleatoire = tab_divs;
  // * la carte qui prend le user
  let chose_carte = [];
  // * Donnez moi 2 fois un div aleatoire
  // & ghadi dour lmra luwla w tpushi liya f chose carte ead dour lmra 2 w tpushi f chose carte
  // * kaybda mn 0 ----> 0 / 1
  // ! 2 kayw9f

  for (let i = 0; i < 2; i++) {
    // ! choisir un div entre div1 et div8
    let e =
      tab_divs_aleatoire[
        Math.round(Math.random() * (tab_divs_aleatoire.length - 1))
      ];
    // * ce qui est choisi va pusher dans carte chose
    // ! pusher 2 fois
    for (let i = 0; i < 2; i++) {
      // & clone node copier
      chose_carte.push(e.cloneNode(true));
    }

    // ! supprimer ce qui est pusher par son index
    tab_divs_aleatoire.splice(tab_divs_aleatoire.indexOf(e), 1);
  }

chose_carte.sort(() => Math.random() - 0.5);

for (let j = 0; j < chose_carte.length; j++) {
    let element = chose_carte[j];
    container.appendChild(element);
}
  // console.log(chose_carte);
console.log(chose_carte);
console.log(tab_divs_aleatoire);

// * declaration des variables deux div et deux classe
let div_1 = "";
let div_2="";
let div_1_class = "";
let div_2_class = "";
let dos_img;
let dos_img2;
let face;
let face2;

  container.addEventListener("click",(event)=>
  {
    if(div_1=="" && event.target.getAttribute("class")!="container")
    {
console.log(event.target);
      // * ekelement parent des images
div_1=event.target.parentElement;
// console.log(div_1.firstElementChild);
div_1_class=div_1.getAttribute("class");
//recuperation d le dos d'image pour fr une display none 
dos_img = div_1.lastElementChild;
dos_img.style.display="none";
face = div_1.firstElementChild;
face.style.display="flex";
    }
    else if (div_2=="" && event.target.getAttribute("class")!="container")
    {
      div_2=event.target.parentElement;
      div_2_class=div_2.getAttribute("class");
       dos_img2 = div_2.lastElementChild;
      dos_img2.style.display="none";
       face2 = div_2.firstElementChild;
      face2.style.display="flex";

      if(div_1_class==div_2_class)
      {
       setTimeout(() => {
        alert("bravo");
        div_1.style.display="none";
        div_2.style.display="none";
        div_1="";
        div_2="";
        div_1_class="";
        div_2_class="";
       }, 500);
    
      }
      
      else{
        setTimeout(() => {
          alert("tu t'es trompé")
     
          div_1.lastElementChild.style.display="flex";
          div_1.firstElementChild.style.display="none";

          div_2.lastElementChild.style.display="flex";
          div_2.firstElementChild.style.display="none";

        div_1="";
        div_2="";
        div_1_class="";
        div_2_class="";
        }, 500);
  
      }
    
    
      if(container.innerHTML==="")
      {
       alert("hh")
      }}

  }
  )
};

// facile_aleatoire();

const moyen_aleatoire=()=>
{
    let tab_div_aleatoire_moyen =[];
    tab_div_aleatoire_moyen=tab_divs;
    console.log(tab_div_aleatoire_moyen);

    let chose_carte_moyen = [];

    for (let im = 0; im < 4; im++) {

        let e_m =
        tab_div_aleatoire_moyen[
          Math.round(Math.random() * (tab_div_aleatoire_moyen.length - 1))
        ];
        for (let jm = 0; jm < 2; jm++) {
            // const element = array[jm];
            chose_carte_moyen.push(e_m.cloneNode(true));
        }
        tab_div_aleatoire_moyen.splice(tab_div_aleatoire_moyen.indexOf(e_m),1);
    }

    chose_carte_moyen.sort(() => Math.random() - 0.5);
for (let km = 0; km < chose_carte_moyen.length; km++) {
    let element = chose_carte_moyen[km];
    container.appendChild(element);
}

// * declaration des variables deux div et deux classe
let div_1 = "";
let div_2="";
let div_1_class = "";
let div_2_class = "";
let dos_img;
let dos_img2;
let face;
let face2;

  container.addEventListener("click",(event)=>
  {
    if(div_1=="" && event.target.getAttribute("class")!="container")
    {
      // * ekelement parent des images
div_1=event.target.parentElement;
div_1_class=div_1.getAttribute("class");
//recuperation d le dos d'image pour fr une display none 
dos_img = div_1.lastElementChild;
dos_img.style.display="none";
face = div_1.firstElementChild;
face.style.display="flex";
    }
    else if (div_2=="" && event.target.getAttribute("class")!="container")
    {
      div_2=event.target.parentElement;
      div_2_class=div_2.getAttribute("class");
       dos_img2 = div_2.lastElementChild;
      dos_img2.style.display="none";
       face2 = div_2.firstElementChild;
      face2.style.display="flex";

      if(div_1_class==div_2_class)
      {
       setTimeout(() => {
        alert("bravo");
        div_1.style.display="none";
        div_2.style.display="none";
        div_1="";
        div_2="";
        div_1_class="";
        div_2_class="";
       }, 500);

      }
      else{
        setTimeout(() => {
          alert("tu t'es trompé")
     
          div_1.lastElementChild.style.display="flex";
          div_1.firstElementChild.style.display="none";

          div_2.lastElementChild.style.display="flex";
          div_2.firstElementChild.style.display="none";

        div_1="";
        div_2="";
        div_1_class="";
        div_2_class="";
        }, 500);

      }
    }

  })
}



// moyen_aleatoire();




const difficile_aleatoire=()=>
{
    let tab_div_aleatoire_difficile = [];
    let chose_carte_difficile = [];
    tab_div_aleatoire_difficile=tab_divs;

    for (let id = 0; id < 8; id++) {
        
        let e_d = tab_div_aleatoire_difficile[Math.round(Math.random() * (tab_div_aleatoire_difficile.length - 1))];

        for (let jd = 0; jd < 2; jd++) {
            
            chose_carte_difficile.push(e_d.cloneNode(true));

        }

        tab_div_aleatoire_difficile.splice(tab_div_aleatoire_difficile.indexOf(e_d),1);
        console.log(e_d);
    }

    chose_carte_difficile.sort(()=> Math.random() - 0.5);

    for (let kd = 0; kd < chose_carte_difficile.length; kd++) {
        let element = chose_carte_difficile[kd];
        container.appendChild(element);
    }

    // * declaration des variables deux div et deux classe
let div_1 = "";
let div_2="";
let div_1_class = "";
let div_2_class = "";
let dos_img;
let dos_img2;
let face;
let face2;

  container.addEventListener("click",(event)=>
  {
    if(div_1=="" && event.target.getAttribute("class")!="container")
    {
      // * ekelement parent des images
div_1=event.target.parentElement;
div_1_class=div_1.getAttribute("class");
//recuperation d le dos d'image pour fr une display none 
dos_img = div_1.lastElementChild;
dos_img.style.display="none";
face = div_1.firstElementChild;
face.style.display="flex";
    }
    else if (div_2=="" && event.target.getAttribute("class")!="container")
    {
      div_2=event.target.parentElement;
      div_2_class=div_2.getAttribute("class");
       dos_img2 = div_2.lastElementChild;
      dos_img2.style.display="none";
       face2 = div_2.firstElementChild;
      face2.style.display="flex";

      if(div_1_class==div_2_class)
      {
       setTimeout(() => {
        alert("bravo");
        div_1.style.display="none";
        div_2.style.display="none";
        div_1="";
        div_2="";
        div_1_class="";
        div_2_class="";
       }, 500);
    
      }
      else{
        setTimeout(() => {
          alert("tu t'es trompé")
     
          div_1.lastElementChild.style.display="flex";
          div_1.firstElementChild.style.display="none";

          div_2.lastElementChild.style.display="flex";
          div_2.firstElementChild.style.display="none";

        div_1="";
        div_2="";
        div_1_class="";
        div_2_class="";
        }, 500);

      }
    }

  })
}

// difficile_aleatoire();
// *************** pseudo

let pseudo_container = document.querySelector(".container_pseudo");
let bouttons = document.querySelectorAll(".btn_mode");
console.log(bouttons);
let input_pseudo = document.querySelector("#pseudo");
// * la valeur de pseudo stocké

let valeur_input ;

for (let i = 0; i < bouttons.length; i++) {
  let element = bouttons[i];
  console.log(element);
  console.log(input_pseudo);

  element.addEventListener("click",()=>
  {
    if(input_pseudo.value== "")
    {
      alert("saisir votre pseudo s'il vous plait ")
    }
    else{
      // ! fonction facile
      if(element.classList.contains("btn_facile"))
      {

   // * stock pseudo de user dans une variable
   valeur_input=input_pseudo.value;
   console.log(valeur_input);
   // *vider le champs de l'input
   input_pseudo.value="";
   pseudo_container.classList.add("d-none");
container.style.display="flex";
        // set interval
        // commencer le cpt par 0 
        score.innerHTML=`Score:${count}`;

        setInterval(() => {
          count++;
          score.innerHTML=`Score:${count}`;
          // * compris les mili seconde
        }, 1000);
        facile_aleatoire();


 }
 
// ! fonction moyen
 if(element.classList.contains("btn_moyen"))
 {

// * stock pseudo de user dans une variable
valeur_input=input_pseudo.value;
console.log(valeur_input);
// *vider le champs de l'input
input_pseudo.value="";
pseudo_container.classList.add("d-none");
container.style.display="flex";
   // set interval
   // commencer le cpt par 0 
   score.innerHTML=`Score:${count}`;

   setInterval(() => {
     count++;
     score.innerHTML=`Score:${count}`;
     // * compris les mili seconde
   }, 1000);
   moyen_aleatoire();
}
// ! fonction difficile

if(element.classList.contains("btn_difficile"))
{

// * stock pseudo de user dans une variable
valeur_input=input_pseudo.value;
console.log(valeur_input);
// *vider le champs de l'input
input_pseudo.value="";
pseudo_container.classList.add("d-none");
container.style.display="flex";
  // set interval
  // commencer le cpt par 0 
  score.innerHTML=`Score:${count}`;

  setInterval(() => {
    count++;
    score.innerHTML=`Score:${count}`;
    // * compris les mili seconde
  }, 1000);
  difficile_aleatoire();
  
}

    }
  }
  )
  
}


const fin_jeux=()=>
{
 let final =document.querySelector(".finale");
 
    final.firstElementChild.innerHTML=`<h6>Bravo tu as gagné dans ${count} seconde</h6>`;
}

fin_jeux()
