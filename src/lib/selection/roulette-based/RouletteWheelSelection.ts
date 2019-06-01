/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { Generator } from '../../generator/utils';
import BaseIndividual from '../../individual/base/BaseIndividual';
import RouletteBasedSelection, {
  RouletteBasedSelectionIndividualData as RouletteWheelSelectionIndividualData,
  RouletteBasedSelectionParams as RouletteWheelSelectionParams,
} from './RouletteBasedSelection';

class RouletteWheelSelection<I extends BaseIndividual<T>, T> extends RouletteBasedSelection<I, T> {
  public selectWith(params: RouletteWheelSelectionParams<I, T, RouletteWheelSelectionIndividualData<I, T>>): I[] {
    this.checkParams(params);
    const mattingPool: I[] = [];
    while (mattingPool.length !== params.selectionCount) {
      const prob = Generator.generateProbability(params.engine);
      let index = 0;
      const { cumulativeProbability, individual } = params.individualsData[index];
      while (cumulativeProbability < prob) {
        index += 1;
      }
      mattingPool.push(individual);
    }
    return mattingPool;
  }
}

export { RouletteWheelSelectionIndividualData, RouletteWheelSelectionParams };
export default RouletteWheelSelection;
