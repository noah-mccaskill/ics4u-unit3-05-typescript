/**
 * This program generates numbers for a magic square.
 *
 * By:      Noah McCaskill
 * Version: 1.0
 * Since:   2022-11-20
 */

const MAGIC_NUM = 15
const POSSIBLE_NUM = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
 * Check For Duplicates.
 *
 * @param {number[]} sqrArray - array to be checked.
 * @returns {boolean} T/F for if sqrArray has duplicates or not.
 */
function hasDuplicates(sqrArray: number[]): boolean {
  const sortedSqrArray = sqrArray.slice().sort(function (a, b) {
    return a - b
  })

  const results = []
  for (let count = 0; count < sortedSqrArray.length - 1; count++) {
    if (sortedSqrArray[count + 1] === sortedSqrArray[count]) {
      results.push(sortedSqrArray[count])
    }
  }
  return results.length !== 0
}

/**
 * Check if Square is Magic.
 *
 * @param {number[]} sqrArray - array to be checked.
 * @returns {boolean} T/F for if sqrArray is magic or not.
 */
function isMagic(sqrArray: number[]): boolean {
  if (hasDuplicates(sqrArray)) {
    return false
  } else {
    // define rows
    const row1 = sqrArray[0] + sqrArray[1] + sqrArray[2]
    const row2 = sqrArray[3] + sqrArray[4] + sqrArray[5]
    const row3 = sqrArray[6] + sqrArray[7] + sqrArray[8]
    // define columns
    const col1 = sqrArray[0] + sqrArray[3] + sqrArray[6]
    const col2 = sqrArray[1] + sqrArray[4] + sqrArray[7]
    const col3 = sqrArray[2] + sqrArray[5] + sqrArray[8]
    // define diagonals
    const diag1 = sqrArray[0] + sqrArray[4] + sqrArray[8]
    const diag2 = sqrArray[2] + sqrArray[4] + sqrArray[6]

    return (
      row1 === row2 &&
      row2 === row3 &&
      row3 === col1 &&
      col1 === col2 &&
      col2 === col3 &&
      col3 === diag1 &&
      diag1 === diag2 &&
      diag2 === MAGIC_NUM
    )
  }
}

/**
 * Magic Square Printing Function.
 *
 * @param {number[]} arr - array to be printed.
 */
function printSquare(arr: number[]): void {
  console.log(
    `${arr[0]}` +
      ' ' +
      `${arr[1]}` +
      ' ' +
      `${arr[2]}` +
      '\n' +
      `${arr[3]}` +
      ' ' +
      `${arr[4]}` +
      ' ' +
      `${arr[5]}` +
      '\n' +
      `${arr[6]}` +
      ' ' +
      `${arr[7]}` +
      ' ' +
      `${arr[8]}` +
      '\n'
  )
}

/**
 * Generates Magic Squares.
 *
 * @param {number[]} pNum - possible numbers to be added to a magic square.
 * @param {number[]} sqrArray - array to be filled with pNum.
 * @param {number} index - current index of sqrArray to add pNum to.
 */
function generateSquare(
  pNum: number[],
  sqrArray: number[],
  index: number
): void {
  // prints valid magic squares
  if (index === 9 && isMagic(sqrArray)) {
    printSquare(sqrArray)
  } else {
    // run through each number for each index
    if (index !== 9) {
      for (let count = 0; count < 9; count++) {
        sqrArray[index] = pNum[count]
        generateSquare(pNum, sqrArray, index + 1)
      }
    }
  }
}

const sqrArray: number[] = []

console.log('Generating All 3x3 Magic Squares...\n')
generateSquare(POSSIBLE_NUM, sqrArray, 0)

console.log('Done.')
