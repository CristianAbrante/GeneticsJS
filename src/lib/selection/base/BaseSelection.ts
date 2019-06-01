/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import BaseIndividual from '../../individual/base/BaseIndividual';
import IndividualsSelection, {
  IndividualData as BaseSelectionIndividualData,
  IndividualsSelectionParams as BaseSelectionParams,
} from './IndividualsSelection';

abstract class BaseSelection<I extends BaseIndividual<T>, T>
  implements
    IndividualsSelection<
      I,
      T,
      BaseSelectionIndividualData<I, T>,
      BaseSelectionParams<I, T, BaseSelectionIndividualData<I, T>>
    > {
  public abstract selectWith(params: BaseSelectionParams<I, T, BaseSelectionIndividualData<I, T>>): I[];

  protected checkParams(params: BaseSelectionParams<I, T, BaseSelectionIndividualData<I, T>>) {
    if (params.selectionCount < 0) {
      throw new Error(`Selection: negative value ${params.selectionCount} is invalid for selection count.`);
    }
    if (params.selectionCount > params.individualsData.length) {
      throw new Error('Selection: could not select more individuals than elements in population');
    }
  }
}

export { BaseSelectionIndividualData, BaseSelectionParams };
export default BaseSelection;
