/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { Generator } from '../../generator/utils';
import BaseIndividual from '../../individual/base/BaseIndividual';
import Population, { PopulationItem } from '../../population/Population';
import SelectionImplementation, { SelectionImplementationParams } from './SelectionImplementation';

class RouletteWheel<I extends BaseIndividual<T>, T> implements SelectionImplementation<I, T> {
  public select(
    population: Population<I, T>,
    params: SelectionImplementationParams,
    cumulativeProbabilityCallback: (item: PopulationItem<I, T>, index: number) => number,
  ) {
    const mattingPool: I[] = [];
    while (mattingPool.length !== params.selectionCount) {
      const prob = Generator.generateProbability(params.engine);
      let index = 0;
      let cumulativeProbability = cumulativeProbabilityCallback(population.getPopulationItem(index), index);
      while (cumulativeProbability < prob) {
        index += 1;
        cumulativeProbability = cumulativeProbabilityCallback(population.getPopulationItem(index), index);
      }
      mattingPool.push(population.getPopulationItem(index).individual);
    }
    return mattingPool;
  }
}

export default RouletteWheel;
