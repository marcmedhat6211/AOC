const getTwoHalfsOfStr = (str: string) => {
  const midpoint = str.length / 2;
  const firstHalf = str.substring(0, midpoint);
  const secondHalf = str.substring(midpoint);

  return { firstHalf, secondHalf }
}

const generateAlphabetMap = (): Record<string, number> => {
  const alphabetMap: Record<string, number> = {};
  const lowercaseStart = 1;
  const uppercaseStart = 27;

  for (let i = 0; i < 26; i++) {
    const letter = String.fromCharCode(97 + i);
    alphabetMap[letter] = lowercaseStart + i;
  }

  for (let i = 0; i < 26; i++) {
    const letter = String.fromCharCode(65 + i);
    alphabetMap[letter] = uppercaseStart + i;
  }

  return alphabetMap;
}

const rucksackReorganization = (ruckstacks: string[]): number => {
  let result = 0;
  const alphabetMap = generateAlphabetMap();

  for (let item of ruckstacks) {
    const formattedStr = getTwoHalfsOfStr(item);

    const firstHalf = formattedStr.firstHalf;
    const secondHalf = formattedStr.secondHalf;

    for (let i = 0; i < firstHalf.length; i++) {
      let commonChar = secondHalf.split('').find((char) => firstHalf[i] === char);

      if (commonChar) {
        result += alphabetMap[commonChar];
        break;
      }
    }
  }

  return result;
}

const getSumOfPrioritiesOfItemTypes = (ruckstacks: string[]): number => {
  const alphabetMap = generateAlphabetMap();
  let sumOfPriorities = 0;

  let startingLoopPoint = 0;
  let endingLoopPoint = 2;
  while (endingLoopPoint <= ruckstacks.length) {
    for (let i = startingLoopPoint; i <= endingLoopPoint; i++) {
      let firstStack = ruckstacks[i];
      let secondStack = ruckstacks[i + 1];
      let thirdStack = ruckstacks[i + 2];

      for (let j = 0; j < firstStack.length; j++) {
        let commonCharInSecond = secondStack.split('').find((char) => firstStack[j] === char);
        let commonCharInThird = thirdStack.split('').find((char) => firstStack[j] === char);

        if (commonCharInSecond && commonCharInThird) {
          sumOfPriorities += alphabetMap[commonCharInSecond];
          i = endingLoopPoint + 1;
          break;
        }
      }
    }

    startingLoopPoint += 3;
    endingLoopPoint += 3;
  }

  return sumOfPriorities;
}

// first part right answer: 7845
// second part right answer: 2790