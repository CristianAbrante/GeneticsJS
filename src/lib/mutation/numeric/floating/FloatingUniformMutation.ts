/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { Generator } from '../../../generator/utils';
import { FloatingIndividual } from '../../../individual/numeric/floating/';
import { UniformMutation, UniformMutationParams as FloatingUniformMutationParams } from '../../base';

class FloatingUniformMutation extends UniformMutation<FloatingIndividual, number> {
  protected mutateGeneUniformly(
    individual: FloatingIndividual,
    index: number,
    params: FloatingUniformMutationParams,
  ): void {
    individual.set(index, Generator.generateFloating(individual.range, params.engine));
  }
}

export { FloatingUniformMutationParams };
export default FloatingUniformMutation;
