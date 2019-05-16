/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { Generator } from '../../generator/utils';
import { BaseIndividual } from '../../individual/base';
import BaseCrossover from './BaseCrossover';
import Crossover, { CrossoverParams, IndividualConstructor } from './Crossover';

export interface UniformCrossoverParams<I extends BaseIndividual<T>, T> extends CrossoverParams<I, T> {
  selectionThreshold: number;
}

class UniformCrossover<I extends BaseIndividual<T>, T> extends BaseCrossover<I, T, UniformCrossoverParams<I, T>> {
  public cross(
    firstParent: I,
    secondParent: I,
    individualConstructor: IndividualConstructor<I, T>,
    selectionThreshold = 0.5,
    engine = Generator.DEFAULT_ENGINE,
  ): I[] {
    return this.crossWith(firstParent, secondParent, { individualConstructor, selectionThreshold, engine });
  }

  public crossWith(firstParent: I, secondParent: I, params: UniformCrossoverParams<I, T>): I[] {
    this.checkParams(params);
    return super.crossWith(firstParent, secondParent, params);
  }

  protected getGenotypeValues(
    firstParent: I,
    secondParent: I,
    params: UniformCrossoverParams<I, T>,
    index: number,
  ): { first: T; second: T } {
    const value = Generator.generateProbability(params.engine);
    const parentSelectionCondition = value <= params.selectionThreshold;
    return {
      first: parentSelectionCondition ? firstParent.get(index) : secondParent.get(index),
      second: parentSelectionCondition ? secondParent.get(index) : firstParent.get(index),
    };
  }

  private checkParams(params: UniformCrossoverParams<I, T>) {
    if (!Generator.probabilityIsValid(params.selectionThreshold)) {
      throw new Error(
        `Uniform Crossover: selection threshold ${params.selectionThreshold} should be in range [0.0, 1.0]`,
      );
    }
  }
}

export default UniformCrossover;
