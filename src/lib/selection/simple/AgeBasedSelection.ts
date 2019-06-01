/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import BaseIndividual from '../../individual/base/BaseIndividual';
import BaseSelection, {
  BaseSelectionIndividualData,
  BaseSelectionParams as AgeBasedSelectionParams,
} from '../base/BaseSelection';

interface AgeBasedSelectionIndividualData<I extends BaseIndividual<T>, T> extends BaseSelectionIndividualData<I, T> {
  age: number;
}

class AgeBasedSelection<I extends BaseIndividual<T>, T> extends BaseSelection<I, T> {
  public selectWith(params: AgeBasedSelectionParams<I, T, AgeBasedSelectionIndividualData<I, T>>): I[] {
    this.checkParams(params);
    return params.individualsData
      .sort((a, b) => a.age - b.age)
      .slice(0, params.selectionCount)
      .map(i => i.individual);
  }

  protected checkParams(params: AgeBasedSelectionParams<I, T, AgeBasedSelectionIndividualData<I, T>>) {
    super.checkParams(params);
    params.individualsData.forEach(data => {
      if (data.age < 0) {
        throw new Error(`Selection: Age ${data.age} is not valid.`);
      }
    });
  }
}

export { AgeBasedSelectionIndividualData, AgeBasedSelectionParams };
export default AgeBasedSelection;
