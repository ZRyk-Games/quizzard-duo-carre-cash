import { Quiz, LEVEL } from "../model/model.module.js";

export const cinema = new Quiz("Cinéma");

cinema.addQuestion(
  LEVEL.HARD,
  "Quel réalisateur a signé le film culte La Haine en 1995 ?",
  "Mathieu Kassovitz",
  "Luc Besson",
  "Jean-Pierre Jeunet",
  "Gaspard Noé",
);

cinema.addQuestion(
  LEVEL.MEDIUM,
  "Quelle prestigieuse récompense le film Pulp Fiction de Quentin Tarantino a-t-il remportée au Festival de Cannes en 1994 ?",
  "La Palme d'Or",
  "Le César du meilleur film étranger",
  "L'Oscar du meilleur film",
  "Le Lion d'Or",
);

cinema.addQuestion(
  LEVEL.EASY,
  "Dans la célèbre série comique française H (diffusée sur Canal+ à partir de 1998), quel comédien incarne l'infirmier gaffeur Sabri Saïd ?",
  "Jamel Debbouze",
  "Eric Judor",
  "Ramzi Bedia",
  "François-Xavier Demaison",
);

cinema.addQuestion(
  LEVEL.HARD,
  'Quel réalisateur a dirigé le film "Le Fabuleux Destin d\'Amélie Poulain" sorti en 2001 ?',
  "Jean-Pierre Jeunet",
  "Mathieu Kassovitz",
  "François Ozon",
  "Luc Besson",
);

cinema.addQuestion(
  LEVEL.HARD,
  "Quel film sud-coréen réalisé par Bong Joon-ho en 2019 est devenu le premier film non anglophone à remporter l'Oscar du meilleur film ?",
  "Parasite",
  "Oldboy",
  "Decision to leave",
  "Dernier train pour Busan",
);

cinema.shuffle();
