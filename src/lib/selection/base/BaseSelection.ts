/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import BaseIndividual from '../../individual/base/BaseIndividual';
import Population from '../../population/Population';
import IndividualsSelection, { IndividualsSelectionParams as BaseSelectionParams } from './IndividualsSelection';

abstract class BaseSelection<I extends BaseIndividual<T>, T>
  implements IndividualsSelection<I, T, BaseSelectionParams> {
  public abstract selectWith(population: Population<I, T>, params: BaseSelectionParams): I[];

  protected checkParams(population: Population<I, T>, params: BaseSelectionParams) {
    if (params.selectionCount < 0) {
      throw new Error(`Selection: negative value ${params.selectionCount} is invalid for selection count.`);
    }
    if (params.selectionCount > population.getPopulationSize()) {
      throw new Error('Selection: could not select more individuals than elements in population');
    }
  }
}

export { BaseSelectionParams };
export default BaseSelection;
