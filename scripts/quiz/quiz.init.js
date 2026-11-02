import {
  all,
  cinema,
  jeuxVideos,
  musics,
  societe,
  sports,
} from "./quiz.module.js";

import { Player } from "../model/model.module.js";

const quizzes = {
  musics,
  cinema,
  sports,
  societe,
  jeuxVideos,
  all,
};

function findAllOptions() {
  return Array.from(document.querySelectorAll('[id^="option_"]'));
}

export function init() {
  const nbPlayers = document.getElementById("nbPlayer");
  const fieldSet = document.getElementById("settings");
  if (!nbPlayers || !fieldSet) {
    return;
  }

  nbPlayers.addEventListener("change", function ($event) {
    const nbPlayersToInit = $event.target.value;
    findAllOptions().forEach((el) => el.parentElement.remove());
    for (let index = 0; index < nbPlayersToInit; ++index) {
      const divOption = document.createElement("div");
      const label = document.createElement("label");
      const value = document.createElement("input");
      const key = "option_" + index;
      value.id = key;
      label.htmlFor = key;
      label.textContent = "Joueur " + (index + 1);
      divOption.classList.add("options");
      divOption.appendChild(label);
      divOption.appendChild(value);
      fieldSet.appendChild(divOption);
    }
  });

  const destination = document.getElementById("themes");
  const starter = document.getElementById("init");
  const game = document.getElementById("game");
  const grid = document.getElementById("grid");
  const themes = document.getElementById("themes");
  const players = document.getElementById("player");

  if (!game || !destination || !starter || !grid || !themes || !players) {
    return;
  }
  const choiceValider = document.getElementById("valider");

  choiceValider.addEventListener("click", function () {
    game.classList.remove("hidden");
    starter.classList.add("hidden");
    findAllOptions().forEach((el) => new Player(el.value));
    Player.all.forEach((el) => {
      players.insertAdjacentHTML("beforeend", `<span>${el.name}</span>`);
    });
  });
  Object.values(quizzes).forEach((element) => {
    const theme = document.createElement("span");
    theme.classList.add("theme");
    theme.textContent = element.multi
      ? element.title
      : "Thème " + element.title;
    destination.appendChild(theme);
    theme.addEventListener("click", function () {
      themes.remove();
      grid.classList.add("w-full");
      players.classList.add("min-w-[30%]");
      document.getElementsByTagName("h1")[0].textContent += element.multi
        ? ` : ${element.title}`
        : ` : Thème ${element.title}`;
      element.run(grid);
    });
  });
}

init();
