/**
 * first case:
 *  in first range of the pair: if first >= first and second <= second
 * second case:
 *  in second range of the pair: if first >= first and second <= second
 * 
 * input: array of arrays, each subarray contains a string similar to '2-4,6-8'
 */

const formatRange = (range: string): { first: number; second: number } => {
  const rangeArr = range.split("-");

  return {
    first: +rangeArr[0],
    second: +rangeArr[1],
  };
};

const formatPair = (
  pair: string[]
): {
  firstRange: { first: number; second: number };
  secondRange: { first: number; second: number };
} => {
  const firstRange = pair[0];
  const secondRange = pair[1];

  return {
    firstRange: formatRange(firstRange),
    secondRange: formatRange(secondRange),
  };
};

/**
fomatted pair will look like this:

const test = {
  firstRange: { first: 2, second: 4 },
  secondRange: { first: 6, second: 8 },
}

*/

const getRangeContainsTheOtherPairCount = (pairs: string[][]): number => {
  let count = 0;

  for (let i = 0; i < pairs.length; i++) {
    const fomattedPair = formatPair(pairs[i]);

    if (
      (fomattedPair.firstRange.first >= fomattedPair.secondRange.first && fomattedPair.firstRange.second <= fomattedPair.secondRange.second)
      ||
      (fomattedPair.secondRange.first >= fomattedPair.firstRange.first && fomattedPair.secondRange.second <= fomattedPair.firstRange.second)
    ) {
      count++;
    }
  }

  return count;
};

// part one right answer = 595