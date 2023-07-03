const characterId = (new URLSearchParams(window.location.search)).get('id');
fetch('https://character-database.becode.xyz/characters/' + id,init)
.then((response) => response.json())
.then(character =>{




    let nameBlock = document.getElementById("p"); // 2.4.
    nameBlock.innerText = character["name"]; //2.5.
    nameBlock.className = "nameBlock"; 

})
.catch(error=> {
});