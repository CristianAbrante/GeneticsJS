/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { Generator } from '../../generator/utils';
import BaseIndividual from '../../individual/base/BaseIndividual';
import { NumericRange } from '../../individual/numeric/base';
import BaseSelection, {
  BaseSelectionIndividualData as RandomSelectionIndividualData,
  BaseSelectionParams as RandomSelectionParams,
} from '../base/BaseSelection';

class RandomSelection<I extends BaseIndividual<T>, T> extends BaseSelection<I, T> {
  public selectWith(params: RandomSelectionParams<I, T, RandomSelectionIndividualData<I, T>>): I[] {
    this.checkParams(params);
    const mattingPool: I[] = [];
    while (mattingPool.length <= params.selectionCount) {
      const { individualsData } = params;
      const generatedIndex = Generator.generateInteger(new NumericRange(0, individualsData.length));
      mattingPool.push(individualsData[generatedIndex].individual);
    }
    return mattingPool;
  }
}

export { RandomSelectionIndividualData, RandomSelectionParams };
export default RandomSelection;
