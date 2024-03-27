export class Team {
  constructor() {
    this.teamCharacters = [];
  }
  addCharacter(character) {
    this.teamCharacters.push(character);
  }

  *[Symbol.iterator](){
    for (let i = 0; i < this.teamCharacters.length; i++) {
      yield this.teamCharacters[i];
    }
  }
}
