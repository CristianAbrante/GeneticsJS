/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { Generator } from '../../generator/utils';
import BaseIndividual from '../../individual/base/BaseIndividual';
import { NumericRange } from '../../individual/numeric/base';
import Population, { PopulationItem } from '../../population/Population';
import SelectionImplementation, { SelectionImplementationParams } from './SelectionImplementation';

class StochasticUniversalSamplingSe<I extends BaseIndividual<T>, T> implements SelectionImplementation<I, T> {
  public select(
    population: Population<I, T>,
    params: SelectionImplementationParams,
    cumulativeProbabilityCallback: (item: PopulationItem<I, T>, index: number) => number,
  ): I[] {
    const mattingPool: I[] = [];
    const amount = 1.0 / params.selectionCount;
    let prob = Generator.generateFloating(new NumericRange(0.0, amount));
    let index = 0;
    while (mattingPool.length !== params.selectionCount) {
      const individual = population.getPopulationItem(index).individual;
      const cumulativeProbability = cumulativeProbabilityCallback(population.getPopulationItem(index), index);
      while (prob <= cumulativeProbability) {
        mattingPool.push(individual);
        prob += amount;
      }
      index += 1;
    }
    return mattingPool;
  }
}

export default StochasticUniversalSamplingSe;
