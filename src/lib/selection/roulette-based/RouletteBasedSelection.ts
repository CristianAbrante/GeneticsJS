/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { Generator } from '../../generator/utils';
import BaseIndividual from '../../individual/base/BaseIndividual';
import BaseSelection from '../base/BaseSelection';
import {
  IndividualData,
  IndividualsSelectionParams as RouletteBasedSelectionParams,
} from '../base/IndividualsSelection';

interface RouletteBasedSelectionIndividualData<I extends BaseIndividual<T>, T> extends IndividualData<I, T> {
  cumulativeProbability: number;
}

abstract class RouletteBasedSelection<I extends BaseIndividual<T>, T> extends BaseSelection<I, T> {
  protected checkParams(params: RouletteBasedSelectionParams<I, T, RouletteBasedSelectionIndividualData<I, T>>) {
    super.checkParams(params);
    params.individualsData.forEach(data => {
      if (!Generator.probabilityIsValid(data.cumulativeProbability)) {
        throw new Error(`Selection: Probability ${data.cumulativeProbability} is not valid.`);
      }
    });
  }
}

export { RouletteBasedSelectionIndividualData, RouletteBasedSelectionParams };
export default RouletteBasedSelection;
