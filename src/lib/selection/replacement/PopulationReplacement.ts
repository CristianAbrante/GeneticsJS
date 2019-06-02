/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import BaseIndividual from '../../individual/base/BaseIndividual';
import Population from '../../population/Population';

export interface PopulationReplacementParams {
  selectionCount: number;
}

interface PopulationReplacement<I extends BaseIndividual<T>, T> {
  replace(
    oldPopulation: Population<I, T>,
    newPopulation: Population<I, T>,
    params: PopulationReplacementParams,
  ): Population<I, T>;
}

export default PopulationReplacement;
