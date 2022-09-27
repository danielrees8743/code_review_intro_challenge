const characters = require('../data/characters.json');
const charactersFemaleBlueEyesFairSkin = require('../exercises/exercise_4');

const solution = () => {
  const SKIN = 'fair';
  const EYES = 'blue';
  const SEX = 'female';

  characters.filter(
    (c) => c.gender === SEX && c.skin_color === SKIN && c.eye_color === EYES
  );
};

console.info(
  'Exercise 4 passed: ',
  JSON.stringify(charactersFemaleBlueEyesFairSkin()) ===
    JSON.stringify(solution())
);
