import { Quiz, LEVEL } from "../model/model.module.js";

export const musics = new Quiz("Musique");
musics.addQuestion(
  LEVEL.HARD,
  'Qui a écrit la chanson "la Bohème", interprêté par Charles Aznavour ?',
  "Jacques Plante",
  "Jean Valmy",
  "Henri Varna",
  "Guy Thomas",
);

musics.addQuestion(
  LEVEL.EASY,
  'Qui chante "Quand la musique est bonne", sortie en 1982 ?',
  "Jean-Jacques Goldman",
  "Indochine",
  "Philippe Lavil",
  "Daniel Balavoine",
);

musics.addQuestion(
  LEVEL.EASY,
  "De quelle ville française est originaire le groupe de rap pionnier IAM ?",
  "Marseille",
  "Paris",
  "Lyon",
  "Toulouse",
);

musics.addQuestion(
  LEVEL.MEDIUM,
  "De quelle ville américaine, épicentre du mouvement grunge au début des années 90, le groupe Nirvana était-il originaire ?",
  "Seattle",
  "Los Angeles",
  "New York",
  "Chicago",
);

musics.addQuestion(
  LEVEL.EASY,
  'Quel artiste détient le record de l\'album le plus vendu de tous les temps grâce à son opus "Thriller" ?',
  "Michael Jackson",
  "Elvis Presley",
  "The Beatles",
  "Pink Floyd",
);

musics.addQuestion(
  LEVEL.MEDIUM,
  'Quel célèbre compositeur a signé la musique du film "Inception" (2010), célèbre pour son son cuivré et massif ("BRAAM") ?',
  "Hans Zimmer",
  "John Williams",
  "Ennio Morricone",
  "Alexandre Dasplat",
);

musics.shuffle();
