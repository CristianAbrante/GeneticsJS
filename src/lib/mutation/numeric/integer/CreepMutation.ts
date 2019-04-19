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
}

class CreepMutation implements Mutation<IntegerIndividual, number, CreepMutationParams> {
  public mutate(individual: IntegerIndividual, stepSize: number = 1, engine = Generator.DEFAULT_ENGINE): void {
    this.mutateWith(individual, {
      engine,
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
    const delta = Generator.generateNormalDistributionInteger(0, params.stepSize, params.engine);
    return NumericRange.normalizeValueToRange(gene + delta, individual.range);
  }
}

export default CreepMutation;
