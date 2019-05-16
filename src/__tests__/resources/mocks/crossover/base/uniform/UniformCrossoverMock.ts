/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { UniformCrossoverParams } from '../../../../../../lib/crossover/base';
import BaseIndividual from '../../../../../../lib/individual/base/BaseIndividual';

export interface UniformCrossoverMock<I extends BaseIndividual<T>, T> {
  firstParent: I;
  secondParent: I;
  offspring: I[];
  params: UniformCrossoverParams<I, T>;
  generatedValues: number[];
}
