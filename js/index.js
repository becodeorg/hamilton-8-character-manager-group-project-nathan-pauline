
// je recup les infos, c ma requête api
fetch('https://character-database.becode.xyz/characters')
    .then((response) => response.json()) // transformer la promesse, qui s'apelle response, en json (le format)
    .then((json) =>  afficher(json)); // je donne en param le json



// je créer ma fonction afficher qui va aller chercher mon info voulue
function afficher(json) {// nom de la var plus haut, c un argument de la fct
    // console.log(json) //console.log de mon fichier json
    for (let character of json) { //  2.3.
       //  console.log(character ["name"] );
        let div = document.createElement("div"); // 2.3.
        div.className = "card"; // je crée une classe a ma div pour la styliser plus tard dans sass
        
        let image = new Image();
        image.src = 'data:image/png;base64,'+character["image"];
        div.appendChild(image);
        image.style.borderRadius = "5px";
        image.style.width ="100%";

        let nameBlock = document.createElement("p"); // 2.4.
        nameBlock.innerText = character["name"]; //2.5.
       
        nameBlock.className = "nameBlock";

        let section =  document.getElementById("characterList"); //2.7.
        section.append(div); //2.8.

        let shortDescriptionBlock = document.createElement("p"); //3
        shortDescriptionBlock.innerText = character["shortDescription"];
        shortDescriptionBlock.className = "shortDescriptionBloc";

        let texte = document.createElement("div");
        texte.append(nameBlock, shortDescriptionBlock);
        div.append(texte);
        texte.className = "divGenerale";


        /* let descriptionBlock = document.createElement("p"); // 4
        descriptionBlock.innerText = character ["description"];
        div.append(descriptionBlock);
        descriptionBlock.className = "descriptionBlock";
        */

    }


}
// 1. paraph 1 avec fetch : je vais chercher dans la page les characters de la database 
   //  1.1  je fais une première promesse, qui s'appelle réponse, et je lui donne le format .json, ca va faire transfo mes charater en format json
   // 1.2 je les fait aficher

// 2. paraph function 
    // 2.1. je crée ma fonction, je lui donne le nom de afficher et comme argument json
    // 2.2. je crée une boucle qui va faire afficher dynamiquement les elements que je veux 
    // 2.3. je creé une div et comme ca mes elements seront la dedans 
    // 2.4. je crée un p, qui s'apelle nameBlock pcq les noms seront dedans
    // 2.5. comme p est encore vide, je lui dis que ce sera du texte dedans et que il affichera les names du bloc character
    // 2.6. je fais tenir mon p dans ma div
    // 2.7. je recup l'élément qui s'aplle characterList et je le met dans la var qui est section
    // 2.8. je fais tenir la div a la section
// 3 je crée un second p que j'apelle shortDescriptionBlock et dedans je vais y mettre les shortDescription du character de mon tableau json
// 4 je crée un 3ème p qui va être ma description et dedans je vais y mettre les description du character de mon tableau json
// 5
// 6 
