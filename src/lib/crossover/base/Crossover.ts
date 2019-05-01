/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { Engine } from 'random-js';
import BaseIndividual from '../../individual/base/BaseIndividual';

export interface CrossoverParams {
  engine: Engine;
}

export type CrossoverConstructor<I extends BaseIndividual<T>, T> = new (...args: any[]) => I;

interface Crossover<I extends BaseIndividual<T>, T, Params extends CrossoverParams> {
  cross(firstParent: I, secondParent: I, ...args: any[]): I[];
  crossWith(firstParent: I, secondParent: I, params: Params, constr: CrossoverConstructor<I, T>): I[];
}

export default Crossover;
