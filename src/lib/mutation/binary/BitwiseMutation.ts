/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { BinaryIndividual } from '../../individual/binary';
import { UniformMutation, UniformMutationParams as BitwiseMutationParams } from './../base';

class BitwiseMutation extends UniformMutation<BinaryIndividual, boolean> {
  protected mutateGeneUniformly(individual: BinaryIndividual, index: number, params: BitwiseMutationParams): void {
    individual.flip(index);
  }
}

export { BitwiseMutationParams };
export default BitwiseMutation;
