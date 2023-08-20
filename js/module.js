"use strick";

const buttonNewGame = document.getElementById("button-game");
const gamesViewList = document.querySelector(".games-list")
let gamesList = [];

const addNewGame = (newGame) => {
    const titleGame = document.getElementById("title").value;
    const fotoGame = document.getElementById("foto").value;
    const descriptionGame = document.getElementById("description").value;
    const shutterGame = document.getElementById("shutter");
    const adventureGame = document.getElementById("adventure");
    const fightGame = document.getElementById("fight");
    const ratingGame = document.getElementById("rating").value;
    const genreArray = [shutterGame, adventureGame, fightGame];
    let genreNewArray = [];

    for (game of genreArray) {
        if (game.checked === true) {
            genreNewArray.push(game.value)
        }
    }
    newGame = {
        name: titleGame,
        foto: fotoGame,
        description: descriptionGame,
        genre: genreNewArray,
        rating: ratingGame
    }
    gamesList.push(newGame)

    gamesViewList.innerHTML = `<div>
        <h3>${newGame.name}</h3>
        <img src="${newGame.foto}"></img>
        <p>${newGame.description}</p>
    </div>`;
}

buttonNewGame.addEventListener("click", addNewGame)