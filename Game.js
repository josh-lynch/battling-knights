/**
 * Main game class, tracks the overall game state, initiates each turn, and exports final output.
 */
class Game {
  /**
   * Creates game instance from array of turn objects
   * @param {array} turns
   */
  constructor(turns) {

  }

  /**
   * Creates array of turn objects from txt turn string.
   * @param {string} turnString
   * @return {array} - turns
   */
  static parseTurnString(turnString) {
    const stepsString = turnString.match(/^GAME-START\n([\s|\S]*)\nGAME-END$/);
    if (!stepsString) throw new SyntaxError('Invalid turnString in moves.txt');

    const stepsArr = stepsString[1].split('\n');
    const turns = stepsArr.map((step) => {
      const [knight, direction] = step.split(':');
      Game.validateStep(knight, direction);
      return { knight, direction };
    });
    return turns;
  }

  /**
   * Static method to validate knight and direction in step using validKnight and validDirection enums
   * @param {string} knight 
   * @param {string} direction 
   */
  static validateStep(knight, direction) {
    const { validKnights, validDirections } = this;
    const isValidKnight = validKnights[knight];
    const isValidDirection = validDirections[direction];
    if (!isValidKnight || !isValidDirection) throw new SyntaxError('Invalid knight or direction in step');
  }

  /**
   * Static getter returns a valid directions enum
   */
  static get validDirections() {
    return {
      N: 'N',
      E: 'E',
      S: 'S',
      W: 'W'
    }
  }

  /**
   * Static getter returns a valid knights enum
   */
  static get validKnights() {
    return {
      R: 'R',
      G: 'G',
      B: 'B',
      Y: 'Y'
    }
  }

}

module.exports = Game;