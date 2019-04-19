/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { Engine, MersenneTwister19937 } from 'random-js';
import { IntegerIndividual } from '../../../individual/numeric/integer';
import { checkProbability } from '../../../utils';
import { Mutation, MutationParams } from '../../base';

export interface RandomResettingParams extends MutationParams {
  mutationRate: number;
}

class RandomResetting implements Mutation<IntegerIndividual, number, RandomResettingParams> {
  public mutate(
    individual: IntegerIndividual,
    mutationRate: number = 0.5,
    engine: Engine = MersenneTwister19937.autoSeed(),
  ): void {
    this.mutateWith(individual, {
      engine,
      mutationRate,
    });
  }

  public mutateWith(individual: IntegerIndividual, params: RandomResettingParams): void {
    checkProbability(params.mutationRate);
  }
}

export default RandomResetting;
