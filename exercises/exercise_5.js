const characters = require('../data/characters.json');

// TODO: return all characters that :
// - birth_year is known
// - male
// - height is more than 200

// Only return the following fields
/*
 * name
 * height
 * mass
 * gender
 * birth_year
 */

const formatCharacters = () => {
  return characters
    .map((character) => {
      const { name, height, mass, gender, birth_year } = character;
      return { name, height, mass, gender, birth_year };
    })
    .filter(
      (character) =>
        character.birth_year !== 'unknown' &&
        character.gender === 'male' &&
        character.height > 200
    );
};

console.log(formatCharacters());

module.exports = formatCharacters;
