/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { OnePointCrossoverParams } from '../../../../../../lib/crossover/base';
import BaseIndividual from '../../../../../../lib/individual/base/BaseIndividual';

export interface OnePointCrossoverMock<I extends BaseIndividual<T>, T> {
  params: OnePointCrossoverParams<I, T>;
  firstParent: I;
  secondParent: I;
  offspring: I[];
  crossoverPoint: number;
}

export default OnePointCrossoverMock;
