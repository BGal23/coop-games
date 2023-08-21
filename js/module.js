"use strick";

const buttonNewGame = document.getElementById("button-game");
const gamesViewList = document.querySelector(".games-list")
let gamesList = [];
let newGameHTMLList = [];

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

    for (let game in newGame) {
        if (newGame[game].length === 0) {
            return buttonNewGame.nextElementSibling.innerHTML = "Musisz wypełnić wszystkie pola"
        }
        else {
            buttonNewGame.nextElementSibling.innerHTML = ""
        }
    }
    gamesList.push(newGame)

    let newGameHTML = `<div>
        <h3>${newGame.name}</h3>
        <img alt="game ${newGame.name}" class="foto" src="${newGame.foto}"></img>
        <p>${newGame.description}</p>
        <p>Gatunek: ${newGame.genre}</p>
        <p>Ocena: ${newGame.rating}</p>
        </div>`;

    newGameHTMLList.push(newGameHTML)

    gamesViewList.innerHTML = newGameHTMLList.join("")
}

buttonNewGame.addEventListener("click", addNewGame)
