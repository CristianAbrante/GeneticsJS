/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import BaseIndividual from '../individual/base/BaseIndividual';
import Population from '../population/Population';
import TerminationCondition from './TerminationCondition';

class MaxGenerations<I extends BaseIndividual<T>, T> implements TerminationCondition<I, T> {
  private maxGenerations = 0;

  constructor(maxGenerations: number) {
    this.maxGenerations = maxGenerations;
  }

  public isSatisfied(population: Population<I, T>, generations: number): boolean {
    return generations >= this.maxGenerations;
  }
}

export default MaxGenerations;
