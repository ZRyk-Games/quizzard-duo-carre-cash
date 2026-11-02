export class Player {
  /**
   * @type {Player[]}
   */
  static all = [];

  /**
   *
   * @param {string} name
   */
  constructor(name) {
    /**
     * @type {string}
     */
    this.name = name;
    /**
     * @type {number}
     */
    this.score = 0;
    Player.all.push(this);
  }

  /**
   *
   * @param {number} points
   */
  addPoints(points) {
    this.score += points;
  }
}
