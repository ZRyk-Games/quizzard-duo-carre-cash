import { LEVEL, Question, shuffle } from "./model.module.js";

export class Quiz {
  /**
   *
   * @param {string} title
   * @param {boolean} [multi=false] définit si ce thème contient d'autres quizz
   */
  constructor(title, multi = false) {
    /**
     * @type {string}
     */
    this.title = title;
    this.multi = multi;

    /**
     * @type {Question[]}
     */
    this.questions = [];
  }

  /**
   *
   * @param {LEVEL} level
   * @param {string} question
   * @param  {...string} propositions
   */
  addQuestion(level, question, ...propositions) {
    this.questions.push(new Question(level, question, ...propositions));
  }

  shuffle() {
    this.questions = shuffle(this.questions);
  }

  /**
   * Recopie les questions d'une game depuis une autre
   * @param {Quiz} game
   */
  copyFrom(game) {
    game.questions.forEach((el) => this.questions.push(el));
  }

  /**
   *
   * @param {HTMLDivElement} game
   */
  run(game) {
    console.log(this);

    for (let i = 0; i < this.questions.length; i++) {
      const block = document.createElement("div");
      block.classList.add("case");

      block.textContent = i + 1;
      switch (this.questions[i].level) {
        case LEVEL.EASY:
          block.classList.add("bg-green-400");
          break;
        case LEVEL.MEDIUM:
          block.classList.add("bg-orange-400");
          break;
        case LEVEL.HARD:
          block.classList.add("bg-red-400");
          break;
      }
      game.appendChild(block);
    }
  }
}
