const getElfWithMostCalories = (
  elvesColories: number[][]
): { max: number; index: number } => {
  let maxCalories = 0;
  let elfIndexWithMostColories = -1;

  for (let i = 0; i < elvesColories.length; i++) {
    const elfCalories = elvesColories[i];
    let sumOfAllCalories = elfCalories.reduce(
      (accumulator, calory) => accumulator + calory,
      0
    );

    if (sumOfAllCalories > maxCalories) {
      maxCalories = sumOfAllCalories;
      elfIndexWithMostColories = i;
    }
  }

  return {
    max: maxCalories,
    index: elfIndexWithMostColories,
  };
};

const getFirstThreeElvesWithMostColories = (
  elvesColories: number[][]
): number => {
  let firstThreeWithMostColories = 0;

  for (let i = 0; i < 3; i++) {
    const elfWithMostCalories = getElfWithMostCalories(elvesColories);

    firstThreeWithMostColories += elfWithMostCalories.max;
    if (elfWithMostCalories.index > -1) {
      elvesColories.splice(elfWithMostCalories.index, 1);
    }
  }

  return firstThreeWithMostColories;
};
