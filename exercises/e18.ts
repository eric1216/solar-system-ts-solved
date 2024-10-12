import { Asteroid } from '../data/data';
import { maxBy } from './e17';

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902
// Hint: use a Map data structure instead of an object if you want typescript to be happy

export function getGreatestDiscoveryYear(asteroids: Asteroid[]) {
  const map = new Map();

  asteroids.forEach(({ discoveryYear }) => {
    map.set(discoveryYear, (map.get(discoveryYear) || 0) + 1);
  });

  const entriesArray = Array.from(map.entries());

  return maxBy(entriesArray, ([, count]) => count)?.[0];
}

// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
