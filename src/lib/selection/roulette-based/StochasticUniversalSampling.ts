/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { Generator } from '../../generator/utils';
import BaseIndividual from '../../individual/base/BaseIndividual';
import { NumericRange } from '../../individual/numeric/base';
import RouletteBasedSelection, {
  RouletteBasedSelectionIndividualData as StochasticUniversalSamplingIndividualData,
  RouletteBasedSelectionParams as StochasticUniversalSamplingParams,
} from './RouletteBasedSelection';

class StochasticUniversalSampling<I extends BaseIndividual<T>, T> extends RouletteBasedSelection<I, T> {
  public selectWith(
    params: StochasticUniversalSamplingParams<I, T, StochasticUniversalSamplingIndividualData<I, T>>,
  ): I[] {
    this.checkParams(params);
    const mattingPool: I[] = [];
    const amount = 1.0 / params.selectionCount;
    let prob = Generator.generateFloating(new NumericRange(0.0, amount));
    let index = 0;
    while (mattingPool.length !== params.selectionCount) {
      const { individual, cumulativeProbability } = params.individualsData[index];
      while (prob <= cumulativeProbability) {
        mattingPool.push(individual);
        prob += amount;
      }
      index += 1;
    }
    return mattingPool;
  }
}

export { StochasticUniversalSamplingIndividualData, StochasticUniversalSamplingParams };
export default StochasticUniversalSampling;
