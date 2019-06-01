/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import BaseIndividual from '../../individual/base/BaseIndividual';
import BaseSelection, {
  BaseSelectionIndividualData,
  BaseSelectionParams as FitnessBasedSelectionParams,
} from '../base/BaseSelection';

interface FitnessBasedSelectionIndividualData<I extends BaseIndividual<T>, T>
  extends BaseSelectionIndividualData<I, T> {
  fitness: number;
}

class FitnessBasedSelection<I extends BaseIndividual<T>, T> extends BaseSelection<I, T> {
  public selectWith(params: FitnessBasedSelectionParams<I, T, FitnessBasedSelectionIndividualData<I, T>>): I[] {
    this.checkParams(params);
    return params.individualsData
      .sort((a, b) => a.fitness - b.fitness)
      .slice(0, params.selectionCount)
      .map(i => i.individual);
  }
}

export { FitnessBasedSelectionIndividualData, FitnessBasedSelectionParams };
export default FitnessBasedSelection;
