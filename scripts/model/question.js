import { LEVEL, shuffle } from "./model.module.js";

export class Question {
  /**
   *
   * @param {LEVEL} level
   * @param {string} question
   * @param  {...string} propositions
   */
  constructor(level, question, ...propositions) {
    /**
     * @type {string}
     */
    this.question = question;

    this.level = level;

    const indexes = "ABCD";

    this.correct = propositions[0];

    /**
     * @type {string[]}
     */
    this.propositions = shuffle(propositions).map(
      (el, index) => `${indexes[index]}) ${el}`,
    );
  }
}
