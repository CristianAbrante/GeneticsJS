/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { Generator } from '../../generator/utils';
import BaseIndividual from '../../individual/base/BaseIndividual';
import { NumericRange } from '../../individual/numeric/base';
import Population from '../../population/Population';
import BaseSelection, { BaseSelectionParams as RandomSelectionParams } from './BaseSelection';

class RandomSelection<I extends BaseIndividual<T>, T> extends BaseSelection<I, T> {
  public selectWith(population: Population<I, T>, params: RandomSelectionParams): I[] {
    this.checkParams(population, params);
    const mattingPool: I[] = [];
    while (mattingPool.length <= params.selectionCount) {
      const generatedIndex = Generator.generateInteger(new NumericRange(0, population.getPopulationSize()));
      mattingPool.push(population.getPopulationItem(generatedIndex).individual);
    }
    return mattingPool;
  }
}

export { RandomSelectionParams };
export default RandomSelection;
