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
  public selectWith(data: Array<RandomSelectionIndividualData<I, T>>, params: RandomSelectionParams): I[] {
    this.checkParams(data, params);
    const mattingPool: I[] = [];
    while (mattingPool.length <= params.selectionCount) {
      const generatedIndex = Generator.generateInteger(new NumericRange(0, data.length));
      mattingPool.push(data[generatedIndex].individual);
    }
    return mattingPool;
  }
}

export { RandomSelectionIndividualData, RandomSelectionParams };
export default RandomSelection;
