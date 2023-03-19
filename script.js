function letterCombinations(digits) {
  const digitToLetters = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };

  if (digits.length === 0) {
    return [];
  }

  const result = [];

  function backtrack(currentString, nextDigits) {
    if (nextDigits.length === 0) {
      result.push(currentString);
      return;
    }

    const letters = digitToLetters[nextDigits[0]];

    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i];
      backtrack(currentString + letter, nextDigits.slice(1));
    }
  }

  backtrack('', digits);
  return result.sort();
}

module.exports = letterCombinations;