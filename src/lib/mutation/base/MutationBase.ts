/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { MutableIndividual } from '../../individual/base';
import Mutation, { MutationParams } from './Mutation';

abstract class MutationBase<I extends MutableIndividual<T>, T, Params extends MutationParams>
  implements Mutation<I, T, Params> {
  public mutateWith(individual: I, params: Params): void {
    individual.forEach((gene, index) => {
      this.mutateGene(individual, index!, params);
    });
  }

  public abstract mutate(individual: I, ...args: any[]): void;

  protected abstract mutateGene(individual: I, index: number, params: Params): void;
}

export default MutationBase;
