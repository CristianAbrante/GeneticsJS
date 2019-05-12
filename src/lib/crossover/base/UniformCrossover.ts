/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { Generator } from '../../generator/utils';
import { BaseIndividual } from '../../individual/base';
import Crossover, { CrossoverParams } from './Crossover';

export interface UniformCrossoverParams<I extends BaseIndividual<T>, T> extends CrossoverParams<I, T> {
  selectionThreshold: number;
}

class UniformCrossover<I extends BaseIndividual<T>, T> implements Crossover<I, T, UniformCrossoverParams<I, T>> {
  public cross(firstParent: I, secondParent: I, ...args: any[]): I[] {
    return [];
  }

  public crossWith(firstParent: I, secondParent: I, params: UniformCrossoverParams<I, T>): I[] | I {
    this.checkParents(firstParent, secondParent);
    this.checkParams(params);

    const parentsLength = firstParent.length();
    const parents = [firstParent, secondParent];
    const genotypes: T[][] = [[], []];

    for (let i = 0; i < parentsLength; i++) {
      const value = Generator.generateProbability(params.engine);
      const parentSelectionCondition = value <= params.selectionThreshold;
      genotypes[0].push(parents[parentSelectionCondition ? 0 : 1].get(i));
      genotypes[0].push(parents[parentSelectionCondition ? 1 : 0].get(i));
    }
    return [new params.individualConstructor(genotypes[0]), new params.individualConstructor(genotypes[1])];
  }

  private checkParents(firstParent: I, secondParent: I) {
    if (firstParent.length() !== secondParent.length()) {
      throw new Error('NPointsCrossover: both parents must have the same length.');
    }
  }

  private checkParams(params: UniformCrossoverParams<I, T>) {
    if (!Generator.probabilityIsValid(params.selectionThreshold)) {
      throw new Error('Uniform Crossover: selection threshold should be in range [0.0, 1.0]');
    }
  }
}
