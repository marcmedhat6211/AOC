const pScores = {
  X: 1,
  Y: 2,
  Z: 3
}

const stragtegiesThatINeedToFollow = {
  X: 'lose',
  Y: 'draw',
  Z: 'win'
}

const winningStrategies = ['CX', 'BZ', 'AY'];
const losingStrategies = ['AZ', 'CY', 'BX'];
const drawStrategies = ['AX', 'BY', 'CZ'];

type OponentType = 'A' | 'B' | 'C';
type MeType = 'X' | 'Y' | 'Z';

const getRoundResult = (oponent: OponentType, me: MeType): number => {
  let result = pScores[me];
  const strategy = oponent + me;
  if (drawStrategies.includes(strategy)) {
    result += 3;
  } else if (winningStrategies.includes(strategy)) {
    result += 6;
  }

  return result;
}

const getTotalScoreForRockPaperScissors = (strategies: string[][]): number => {
  let totalScore = 0;

  for (let i = 0; i < strategies.length; i++) {
    totalScore += getRoundResult(strategies[i][0] as OponentType, strategies[i][1] as MeType);
  }

  return totalScore;
}

const getRoundResultForSpecificStrategy = (oponent: OponentType, me: MeType): number => {
  let result = 0;

  const strategyFollowed = stragtegiesThatINeedToFollow[me];
  let strat: string | undefined;
  
  if (strategyFollowed === 'lose') {
    strat = losingStrategies.find((strat) => strat.startsWith(oponent));
  } else if (strategyFollowed === 'draw') {
    strat = drawStrategies.find((strat) => strat.startsWith(oponent));
  } else { // win
    strat = winningStrategies.find((strat) => strat.startsWith(oponent));
  }

  if (strat) {
    result += getRoundResult(strat[0] as OponentType, strat[1] as MeType);
  }

  return result;
}

const getTotalScoreForSpecificStrategy = (strategies: string[][]): number => {
  let totalScore = 0;

  for (let i = 0; i < strategies.length; i++) {
    totalScore += getRoundResultForSpecificStrategy(strategies[i][0] as OponentType, strategies[i][1] as MeType);
  }

  return totalScore;
}