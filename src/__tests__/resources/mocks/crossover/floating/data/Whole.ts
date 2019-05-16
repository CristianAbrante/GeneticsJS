/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { Generator } from '../../../../../../lib/generator/utils';
import { FloatingIndividual } from '../../../../../../lib/individual/numeric/floating';
import { FloatingCrossoverMock } from '../FloatingCrossoverMock';

const mocks: FloatingCrossoverMock[] = [
  {
    firstParent: new FloatingIndividual('0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9'),
    offspring: [
      new FloatingIndividual('0.2 0.2 0.3 0.30000000000000004 0.4 0.4 0.5 0.5 0.6'),
      new FloatingIndividual('0.2 0.2 0.3 0.30000000000000004 0.4 0.4 0.5 0.5 0.6'),
    ],
    params: {
      alpha: 0.5,
      engine: Generator.DEFAULT_ENGINE,
      individualConstructor: FloatingIndividual,
    },
    recombinationPoint: 7,
    secondParent: new FloatingIndividual('0.3 0.2 0.3 0.2 0.3 0.2 0.3 0.2 0.3'),
  },
];

export default mocks;
