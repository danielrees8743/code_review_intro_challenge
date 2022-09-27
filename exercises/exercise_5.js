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
    .map((character) => ({
      name: character.name,
      height: character.height,
      mass: character.mass,
      gender: character.gender,
      birth_year: character.birth_year,
    }))
    .filter(
      (character) =>
        character.birth_year !== 'unknown' &&
        character.gender === 'male' &&
        character.height > 200
    );
};

module.exports = formatCharacters;
