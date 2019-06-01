/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { Engine } from 'random-js';
import BaseIndividual from '../../individual/base/BaseIndividual';

export interface IndividualData<I extends BaseIndividual<T>, T> {
  individual: I;
}

export interface IndividualsSelectionParams<I extends BaseIndividual<T>, T, Data extends IndividualData<I, T>> {
  individualsData: Data[];
  selectionCount: number;
  engine: Engine;
}

interface IndividualsSelection<
  I extends BaseIndividual<T>,
  T,
  Data extends IndividualData<I, T>,
  Params extends IndividualsSelectionParams<I, T, Data>
> {
  selectWith(params: Params): I[];
}

export default IndividualsSelection;
