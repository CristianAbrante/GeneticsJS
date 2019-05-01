/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { Generator } from '../../generator/utils';
import MutableIndividual from '../../individual/base/MutableIndividual';
import NumericRange from '../../individual/numeric/base/NumericRange';
import Crossover, { CrossoverConstructor, CrossoverParams } from './Crossover';

export interface NPointsCrossoverParams extends CrossoverParams {
  numberOfCrossoverPoints: number;
}

class NPointsCrossover<I extends MutableIndividual<T>, T, Constr extends CrossoverConstructor<I, T>>
  implements Crossover<I, T, NPointsCrossoverParams> {
  public static checkParents<I extends MutableIndividual<T>, T>(fistParent: I, secondParent: I) {
    if (fistParent.length() !== secondParent.length()) {
      throw new Error('Error: length of the parents is not equal.');
    }
  }

  private static numberOfCrossoverPointsIsValid(numberOfPoints: number, parentsLength: number) {
    if (numberOfPoints < 0 || numberOfPoints > parentsLength - 1) {
      throw new RangeError('Error: number of points is not in range [0, length - 1].');
    }
  }

  private static generateRandomCrossPoints(
    numberOfCrossoverPoints: number,
    parentsLength: number,
    engine = Generator.DEFAULT_ENGINE,
  ): number[] {
    NPointsCrossover.numberOfCrossoverPointsIsValid(numberOfCrossoverPoints, parentsLength);
    const crossoverPoints: number[] = [];
    const range = new NumericRange(1, parentsLength - 1);
    while (crossoverPoints.length !== numberOfCrossoverPoints) {
      const crossoverPoint = Generator.generateInteger(range, engine);
      if (!crossoverPoints.includes(crossoverPoint)) {
        crossoverPoints.push(crossoverPoint);
      }
    }
    return crossoverPoints.sort();
  }

  public cross(firstParent: I, secondParent: I, ...args: any[]): I[] {
    return [];
  }

  public crossWith(
    firstParent: I,
    secondParent: I,
    params: NPointsCrossoverParams,
    constr: CrossoverConstructor<I, T>,
  ): I[] {
    NPointsCrossover.checkParents(firstParent, secondParent);
    const crossPoints = NPointsCrossover.generateRandomCrossPoints(
      params.numberOfCrossoverPoints,
      firstParent.length(),
      params.engine,
    );
    const firstGenotype: T[] = [];
    const secondGenotype: T[] = [];

    let lastIndex = 0;
    crossPoints.forEach((crossPoint, index) => {
      while (lastIndex < crossPoint) {
        if (index % 2 === 0) {
          firstGenotype.push(firstParent.get(lastIndex));
          secondGenotype.push(secondParent.get(lastIndex));
        } else {
          firstGenotype.push(secondParent.get(lastIndex));
          secondGenotype.push(firstParent.get(lastIndex));
        }
        lastIndex += 1;
      }
    });

    return [new constr(firstGenotype), new constr(secondGenotype)];
  }
}

export default NPointsCrossover;
