/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { BinaryIndividual } from '../../../../../../../index';
import { Generator } from '../../../../../../../lib/generator/utils';
import { UniformCrossoverMock } from '../UniformCrossoverMock';

const mocks: Array<UniformCrossoverMock<BinaryIndividual, boolean>> = [
  {
    firstParent: new BinaryIndividual('000010000'),
    generatedValues: [0.3, 0.6, 0.1, 0.4, 0.8, 0.7, 0.3, 0.5, 0.3],
    offspring: [new BinaryIndividual('010000000'), new BinaryIndividual('100110001')],
    params: {
      engine: Generator.DEFAULT_ENGINE,
      individualConstructor: BinaryIndividual,
      selectionThreshold: 0.5,
    },
    secondParent: new BinaryIndividual('110100001'),
  },
  {
    firstParent: new BinaryIndividual('01'),
    generatedValues: [0.3, 0.8],
    offspring: [new BinaryIndividual('01'), new BinaryIndividual('11')],
    params: {
      engine: Generator.DEFAULT_ENGINE,
      individualConstructor: BinaryIndividual,
      selectionThreshold: 0.8,
    },
    secondParent: new BinaryIndividual('11'),
  },
];

export default mocks;
