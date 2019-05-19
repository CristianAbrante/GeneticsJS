/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { NPointsCrossoverParams } from '../../../../../../lib/crossover/base';
import BaseIndividual from '../../../../../../lib/individual/base/BaseIndividual';

interface NPointsCrossoverMock<I extends BaseIndividual<T>, T> {
  params: NPointsCrossoverParams<I, T>;
  firstParent: I;
  secondParent: I;
  offspring: I[];
  crossoverPoints: number[];
}

export default NPointsCrossoverMock;
