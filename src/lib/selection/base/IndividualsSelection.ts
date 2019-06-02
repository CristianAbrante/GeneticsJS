/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { Engine } from 'random-js';
import BaseIndividual from '../../individual/base/BaseIndividual';
import Population from '../../population/Population';

export interface IndividualsSelectionParams {
  selectionCount: number;
  engine: Engine;
}

interface IndividualsSelection<I extends BaseIndividual<T>, T, Params extends IndividualsSelectionParams> {
  selectWith(population: Population<I, T>, params: Params): I[];
}

export default IndividualsSelection;
