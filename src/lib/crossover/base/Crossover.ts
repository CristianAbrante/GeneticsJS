/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { Engine } from 'random-js';
import BaseIndividual from '../../individual/base/BaseIndividual';

export type IndividualConstructor<I extends BaseIndividual<T>, T> = new (genotype: T[]) => I;

export interface CrossoverParams<I extends BaseIndividual<T>, T> {
  engine: Engine;
  individualConstructor: IndividualConstructor<I, T>;
}

interface Crossover<I extends BaseIndividual<T>, T, Params extends CrossoverParams<I, T>> {
  cross(firstParent: I, secondParent: I, ...args: any[]): I | I[];
  crossWith(firstParent: I, secondParent: I, params: Params): I | I[];
}

export default Crossover;
