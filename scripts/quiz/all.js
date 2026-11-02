import { Quiz } from "../model/model.module.js";
import { cinema, jeuxVideos, musics, societe, sports } from "./quiz.module.js";

export const all = new Quiz("Tous les thèmes", true);

all.copyFrom(cinema);
all.copyFrom(musics);
all.copyFrom(sports);
all.copyFrom(societe);
all.copyFrom(jeuxVideos);

all.shuffle();
