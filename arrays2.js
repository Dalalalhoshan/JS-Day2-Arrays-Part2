/** Task 1
 * isArrayLengthOdd(numbers):
 * - receives array `numbers`
 * - returns true if array has an odd number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthOdd([1, 2, 3]) -> true
 * isArrayLengthOdd([1, 2, 3, 4]) -> flase
 */

function isArrayLengthOdd(numbers) {
  if (numbers.length % 2 == 0) {
    return false;
  } else return true;
}

console.log(isArrayLengthOdd([1, 2, 3, 4]));

/** Task 2
 * isArrayLengthEven(numbers):
 * - receives array `numbers`
 * - returns true if array has an even number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthEven([1, 2, 3]) -> false
 * isArrayLengthEven([1, 2, 3, 4]) -> true
 */
function isArrayLengthEven(numbers) {
  if (numbers.length % 2 == 0) {
    return true;
  } else return false;
}

console.log(isArrayLengthEven([1, 2, 3, 4]));

/** Task 3
 * addLailaToArray(instructors):
 * - receives array `instructors`
 * - returns a new array that's a copy of array `instructors` with additional string "Laila"
 *
 * e.g.
 * addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
 */
function addLailaToArray(instructors) {
  instructors.push("Laila");
  return instructors;
}

console.log(addLailaToArray(["Mshary", "Hasan"]));

/**Task 4
 * eliminateTeam(teams):
 * - receives array `teams`
 * - removes the last element from the array and return it
 *
 * e.g.
 * eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
 */
function eliminateTeam(teams) {
  return teams.pop();
}

console.log(eliminateTeam(["Brazil", "Germany", "Italy"]));

/** Challenge 1
 * secondHalfOfArrayIfItIsEven(fruits):
 * - receives array `fruits`
 * - returns a new array that's the second half of the original array if it has an even number of elements
 * - returns an empty array if it has an odd number of elements
 *
 * e.g.
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ["banana", "kiwi"]
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> []
 */
function secondHalfOfArrayIfItIsEven(fruits) {
  if (fruits.length % 2 == 0) {
    const half = fruits.length / 2;
    return fruits.slice(half);
  } else return [];
}

console.log(secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]));
