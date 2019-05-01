/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import NPointsCrossover from '../../lib/crossover/base/NPointsCrossover';
import { Generator } from '../../lib/generator/utils';
import BinaryIndividual from '../../lib/individual/binary/BinaryIndividual';

const ind1 = new BinaryIndividual([true, false, false, true]);
const ind2 = new BinaryIndividual([true, true, false, true]);

const cross = new NPointsCrossover();

const result = cross.crossWith(
  ind1,
  ind2,
  { numberOfCrossoverPoints: 3, engine: Generator.DEFAULT_ENGINE },
  BinaryIndividual,
);

console.log(result);
