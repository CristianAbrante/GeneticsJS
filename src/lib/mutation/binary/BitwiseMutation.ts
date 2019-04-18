/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { Engine, MersenneTwister19937, real } from 'random-js';
import { BinaryIndividual } from '../../individual/binary';
import { checkProbability, generateProbability } from '../../utils';
import { Mutation, MutationParams } from './../base';

export interface BitwiseParams extends MutationParams {
  mutationRate: number;
}

class BitwiseMutation implements Mutation<BinaryIndividual, boolean, BitwiseParams> {
  public mutate(
    individual: BinaryIndividual,
    mutationRate: number = 0.5,
    engine: Engine = MersenneTwister19937.autoSeed(),
  ): void {
    this.mutateWith(individual, {
      engine,
      mutationRate,
    });
  }

  public mutateWith(individual: BinaryIndividual, params: BitwiseParams): void {
    checkProbability(params.mutationRate);
    for (let i = 0; i < individual.length(); i++) {
      const d = generateProbability(params.engine);
      if (d <= params.mutationRate) {
        individual.flip(i);
      }
    }
  }
}

export default BitwiseMutation;