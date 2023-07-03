const characterId = (new URLSearchParams(window.location.search)).get('id');
fetch('https://character-database.becode.xyz/characters/' + characterId)
    .then((response) => response.json())
    .then(character =>{

    let div = document.createElement("div");
    div.className = "character";
    
    let image = new Image();
    image.src = 'data:image/png;base64,'+ character["image"];
    div.appendChild(image);
    image.style.width ="100%";


    let nameBlock = document.getElementById("p"); // amener le nom du character
    nameBlock.innerText = character["name"]; // dire que y aura du texte et que c nom de l'api
    nameBlock.className = "nameBlock";  // mettre une classe nameBlock
    div.appendChild(nameBlock);





})
.catch(error=> {


});