/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { Generator } from '../../../generator/utils';
import { IntegerIndividual } from '../../../individual/numeric/integer';
import { Mutation, MutationParams } from '../../base';

export interface RandomResettingParams extends MutationParams {
  mutationRate: number;
}

class RandomResetting implements Mutation<IntegerIndividual, number, RandomResettingParams> {
  public mutate(individual: IntegerIndividual, mutationRate = 0.5, engine = Generator.DEFAULT_ENGINE): void {
    this.mutateWith(individual, { mutationRate, engine });
  }

  public mutateWith(individual: IntegerIndividual, params: RandomResettingParams): void {
    individual.forEach((_, index) => {
      const threshold = Generator.generateProbability(params.engine);
      if (threshold <= params.mutationRate) {
        const newGeneValue = Generator.generateInteger(individual.range, params.engine);
        individual.set(index!, newGeneValue);
      }
    });
  }
}

export default RandomResetting;
