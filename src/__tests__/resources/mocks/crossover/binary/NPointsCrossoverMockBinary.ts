/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { Generator } from '../../../../../lib/generator/utils';
import { BinaryIndividual } from '../../../../../lib/individual/binary';
import NPointsCrossoverMock from './../NPointsCrossoverMock';

const mocks: Array<NPointsCrossoverMock<BinaryIndividual, boolean>> = [
  {
    crossoverPoints: [1, 3],
    firstParent: new BinaryIndividual('10001'),
    offspring: [new BinaryIndividual('11001'), new BinaryIndividual('10010')],
    params: {
      engine: Generator.DEFAULT_ENGINE,
      individualConstructor: BinaryIndividual,
      numberOfCrossoverPoints: 2,
    },
    secondParent: new BinaryIndividual('11010'),
  },
];

export default mocks;
