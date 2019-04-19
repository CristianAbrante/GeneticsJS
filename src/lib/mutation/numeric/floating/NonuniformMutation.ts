/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { Generator } from '../../../generator/utils';
import { NumericRange } from '../../../individual/numeric/base';
import FloatingIndividual from '../../../individual/numeric/floating/FloatingIndividual';
import { Mutation, MutationParams } from '../../base';
import { CreepMutationParams } from '../integer/CreepMutation';

export interface NonUniformMutationParams extends MutationParams {
  stepSize: number;
}

class NonuniformMutation implements Mutation<FloatingIndividual, number, NonUniformMutationParams> {
  public mutate(individual: FloatingIndividual, stepSize: number = 1.0, engine = Generator.DEFAULT_ENGINE): void {
    this.mutateWith(individual, { stepSize, engine });
  }

  public mutateWith(individual: FloatingIndividual, params: CreepMutationParams): void {
    individual.forEach((_, index) => {
      const gene = this.getMutatedGeneValue(individual, index!, params);
      individual.set(index!, gene);
    });
  }

  private getMutatedGeneValue(individual: FloatingIndividual, index: number, params: CreepMutationParams) {
    const gene = individual.get(index);
    const delta = Generator.generateNormalDistributionValue(0, params.stepSize, params.engine);
    return NumericRange.normalizeValueToRange(gene + delta, individual.range);
  }
}

export default NonuniformMutation;
