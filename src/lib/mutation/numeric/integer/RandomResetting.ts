/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { Generator } from '../../../generator/utils';
import { IntegerIndividual } from '../../../individual/numeric/integer';
import { UniformMutation, UniformMutationParams } from '../../base';

class RandomResetting extends UniformMutation<IntegerIndividual, number> {
  protected mutateGeneUniformly(individual: IntegerIndividual, index: number, params: UniformMutationParams): void {
    individual.set(index, Generator.generateInteger(individual.range, params.engine));
  }
}

export default RandomResetting;
