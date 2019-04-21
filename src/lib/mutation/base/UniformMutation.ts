/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { Generator } from '../../generator/utils';
import { MutableIndividual } from '../../individual/base';
import { MutationParams } from './Mutation';
import MutationBase from './MutationBase';

export interface UniformMutationParams extends MutationParams {
  mutationRate: number;
}

abstract class UniformMutation<I extends MutableIndividual<T>, T> extends MutationBase<I, T, UniformMutationParams> {
  private static checkMutationRate(mutationRate: number) {
    if (!Generator.probabilityIsValid(mutationRate)) {
      throw new Error(`Error: Mutation rate ${mutationRate} is not in range [0.0 - 1.0]`);
    }
  }

  public mutate(individual: I, mutationRate = 0.5, engine = Generator.DEFAULT_ENGINE): void {
    this.mutateWith(individual, { mutationRate, engine });
  }

  public mutateWith(individual: I, params: UniformMutationParams): void {
    UniformMutation.checkMutationRate(params.mutationRate);
    super.mutateWith(individual, params);
  }

  protected mutateGene(individual: I, index: number, params: UniformMutationParams): void {
    const threshold = Generator.generateProbability(params.engine);
    if (threshold <= params.mutationRate) {
      this.mutateGeneUniformly(individual, index, params);
    }
  }

  protected abstract mutateGeneUniformly(individual: I, index: number, params: UniformMutationParams): void;
}

export default UniformMutation;
