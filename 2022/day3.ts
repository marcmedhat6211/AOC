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
      // let commonChar = secondtHalf.split('').find((char) => firstHalf[i] === char);
      const commonChar = firstHalf.split('').find(char => secondHalf.includes(char));

      if (commonChar) {
        result += alphabetMap[commonChar];
      }
    }
  }

  return result;
}