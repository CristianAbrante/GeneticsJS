/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import BaseIndividual from '../individual/base/BaseIndividual';
import Population from '../population/Population';

interface TerminationCondition<I extends BaseIndividual<T>, T> {
  isSatisfied(population: Population<I, T>, generations: number): boolean;
}

export default TerminationCondition;
