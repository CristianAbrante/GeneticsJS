/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { Generator } from '../../../generator/utils';
import { NumericRange } from '../../../individual/numeric/base';
import { NumericIndividual } from '../../../individual/numeric/base';
import { MutationBase, MutationParams } from '../../base';

export interface NumericNonUniformMutationParams extends MutationParams {
  stepSize: number;
}

abstract class NumericNonUniformMutation<I extends NumericIndividual> extends MutationBase<
  I,
  number,
  NumericNonUniformMutationParams
> {
  public mutate(individual: I, stepSize = 1.0, engine = Generator.DEFAULT_ENGINE): void {
    this.mutateWith(individual, { stepSize, engine });
  }

  protected mutateGene(individual: I, index: number, params: NumericNonUniformMutationParams): void {
    const gene = individual.get(index);
    const delta = this.getDeltaValue(params);
    const newGene = NumericRange.normalizeValueToRange(gene + delta, individual.range);
    individual.set(index, newGene);
  }

  protected abstract getDeltaValue(params: NumericNonUniformMutationParams): number;
}

export default NumericNonUniformMutation;
