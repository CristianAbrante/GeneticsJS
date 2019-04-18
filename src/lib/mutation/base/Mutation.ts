/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { Engine } from 'random-js';
import { BaseIndividual } from '../../individual/base';

export interface MutationParams {
  engine: Engine;
}

interface Mutation<I extends BaseIndividual<T>, T, Params extends MutationParams> {
  mutate(individual: I, ...args: any[]): void;
  mutateWith(individual: I, params: Params): void;
}

export default Mutation;
