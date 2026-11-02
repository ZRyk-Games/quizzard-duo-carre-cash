import { Quiz, LEVEL } from "../model/model.module.js";

export const societe = new Quiz("Société");
societe.addQuestion(
  LEVEL.EASY,
  "En quelle année Nelson Mandela a-t-il été élu président de l'Afrique du Sud, marquant la fin officielle de l'apartheid ?",
  1994,
  1996,
  1998,
  1992,
);

societe.addQuestion(
  LEVEL.EASY,
  "Signé en février 1992, quel traité fondateur a donné naissance à l'Union européenne sous sa forme moderne et préparé l'arrivée de l'euro ?",
  "Traité de Maastricht",
  "Traité de Lisbonne",
  "Conférence de Yalta",
  "Traité de Rome",
);

societe.addQuestion(
  LEVEL.EASY,
  "Quel jeu de cour de récréation, composé de petits disques en carton que l'on empilait et cherchait à retourner à l'aide d'un lourd palet appelé « slammer », a connu un immense succès en France vers 1995 ?",
  "Les Pogs",
  "Les billes",
  "Magic, L'assemblée",
  "Les Tamagotchis",
);

societe.addQuestion(
  LEVEL.MEDIUM,
  "Quelle institution de l'Union européenne est la seule dont les membres sont directement élus au suffrage universel par les citoyens ?",
  "Le Parlement Européen",
  "La Commission Européenne",
  "Le Conseil Européen",
  "La Cour de Justice de l'Union Européenne",
);

societe.shuffle();
