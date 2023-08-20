"use strick";

const buttonNewGame = document.getElementById("button-game");
let gameList = [];

const addNewGame = (newGame) => {
    const titleGame = document.getElementById("title").value;
    const fotoGame = document.getElementById("foto").value;
    const descriptionGame = document.getElementById("description").value;
    const shutterGame = document.getElementById("shutter").value;
    const adventureGame = document.getElementById("adventure").value;
    const fightGame = document.getElementById("fight").value;
    const ratingGame = document.getElementById("rating").value;
    const genreArray = []

    newGame = {
        name: titleGame,
        foto: fotoGame,
        description: descriptionGame,
        genre: [shutterGame,adventureGame,fightGame],
        rating: ratingGame
    }
    gameList.push(newGame)

    console.log(gameList)
}

buttonNewGame.addEventListener("click", addNewGame)