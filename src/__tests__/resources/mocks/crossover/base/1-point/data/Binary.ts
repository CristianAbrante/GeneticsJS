/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { Generator } from '../../../../../../../lib/generator/utils';
import { BinaryIndividual } from '../../../../../../../lib/individual/binary';
import OnePointCrossoverMock from '../OnePointCrossoverMock';

const mocks: Array<OnePointCrossoverMock<BinaryIndividual, boolean>> = [
  {
    crossoverPoint: 3,
    firstParent: new BinaryIndividual('100010'),
    offspring: [new BinaryIndividual('100100'), new BinaryIndividual('000010')],
    params: {
      engine: Generator.DEFAULT_ENGINE,
      individualConstructor: BinaryIndividual,
    },
    secondParent: new BinaryIndividual('000100'),
  },
  {
    crossoverPoint: 1,
    firstParent: new BinaryIndividual('10'),
    offspring: [new BinaryIndividual('10'), new BinaryIndividual('00')],
    params: {
      engine: Generator.DEFAULT_ENGINE,
      individualConstructor: BinaryIndividual,
    },
    secondParent: new BinaryIndividual('00'),
  },
];

export default mocks;
