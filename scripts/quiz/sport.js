import { Quiz, LEVEL } from "../model/model.module.js";

export const sports = new Quiz("Sports");
sports.addQuestion(
  LEVEL.EASY,
  "Lors de la finale de la Coupe du monde de football 1998 (France - Brésil), quel joueur tricolore a inscrit un doublé de la tête en première mi-temps ?",
  "Zinedine Zidane",
  "Emmanuel Petit",
  "Lilian Thuram",
  "Patrick Viera",
);

sports.shuffle();
