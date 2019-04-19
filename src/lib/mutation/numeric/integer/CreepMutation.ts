/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { Generator } from '../../../generator/utils';
import { NumericRange } from '../../../individual/numeric/base';
import { IntegerIndividual } from '../../../individual/numeric/integer';
import Mutation, { MutationParams } from '../../base/Mutation';

export interface CreepMutationParams extends MutationParams {
  stepSize: number;
  mean: number;
}

class CreepMutation implements Mutation<IntegerIndividual, number, CreepMutationParams> {
  public mutate(
    individual: IntegerIndividual,
    stepSize: number = 1,
    mean: number = 0,
    engine = Generator.DEFAULT_ENGINE,
  ): void {
    this.mutateWith(individual, {
      engine,
      mean,
      stepSize,
    });
  }

  public mutateWith(individual: IntegerIndividual, params: CreepMutationParams): void {
    individual.forEach((_, index) => {
      const gene = this.getMutatedGeneValue(individual, index!, params);
      individual.set(index!, gene);
    });
  }

  private getMutatedGeneValue(individual: IntegerIndividual, index: number, params: CreepMutationParams) {
    const gene = individual.get(index);
    const delta = Generator.generateNormalDistributionInteger(params.mean, params.stepSize, params.engine);
    return NumericRange.normalizeValueToRange(gene + delta, individual.range);
  }
}

export default CreepMutation;
