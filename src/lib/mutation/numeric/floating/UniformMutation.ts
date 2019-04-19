/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { Generator } from '../../../generator/utils';
import FloatingIndividual from '../../../individual/numeric/floating/FloatingIndividual';
import { Mutation, MutationParams } from '../../base';

export interface UniformMutationParams extends MutationParams {
  mutationRate: number;
}

class UniformMutation implements Mutation<FloatingIndividual, number, UniformMutationParams> {
  public mutate(individual: FloatingIndividual, ...args: any[]): void {}

  public mutateWith(individual: FloatingIndividual, params: UniformMutationParams): void {
    individual.forEach((_, index) => {
      const threshold = Generator.generateProbability(params.engine);
      if (threshold <= params.mutationRate) {
        individual.set(index!, Generator.generateFloating(individual.range));
      }
    });
  }
}

export default UniformMutation;
