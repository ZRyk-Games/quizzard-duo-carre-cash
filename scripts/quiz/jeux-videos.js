import { Quiz, LEVEL } from "../model/model.module.js";

export const jeuxVideos = new Quiz("Jeux vidéos");
jeuxVideos.addQuestion(
  LEVEL.MEDIUM,
  "En quelle année la console Sony PlayStation est-elle officiellement sortie en France ?",
  1995,
  1993,
  1997,
  1999,
);
jeuxVideos.addQuestion(
  LEVEL.MEDIUM,
  "En quelle année la première console de salon Nintendo Entertainment System (NES) est-elle officiellement sortie en Europe ?",
  1986,
  1983,
  1990,
  1981,
);

jeuxVideos.shuffle();
