/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { BaseIndividual } from '../../individual/base';
import Crossover, { CrossoverParams } from './Crossover';

abstract class BaseCrossover<I extends BaseIndividual<T>, T, Params extends CrossoverParams<I, T>>
  implements Crossover<I, T, Params> {
  public abstract cross(firstParent: I, secondParent: I, ...args: any[]): I | I[];

  public crossWith(firstParent: I, secondParent: I, params: CrossoverParams<I, T>): I | I[] {
    this.checkParents(firstParent, secondParent);
    const parentsLength = firstParent.length();
    const genotypes: T[][] = [[], []];
    for (let i = 0; i < parentsLength; i++) {
      const result = this.getGenotypeValues(firstParent, secondParent, i);
      genotypes[0].push(result.firstGenotypeValue);
      genotypes[1].push(result.secondGenotypeValue);
    }
    return [new params.individualConstructor(genotypes[0]), new params.individualConstructor(genotypes[1])];
  }

  protected abstract getGenotypeValues(
    firstParent: I,
    secondParent: I,
    index: number,
  ): { firstGenotypeValue: T; secondGenotypeValue: T };

  protected parentsAreValid(firstParent: I, secondParent: I): boolean {
    return firstParent.length() === secondParent.length();
  }

  protected checkParents(firstParent: I, secondParent: I) {
    if (!this.parentsAreValid(firstParent, secondParent)) {
      throw new Error('NPointsCrossover: both parents must have the same length.');
    }
  }
}
