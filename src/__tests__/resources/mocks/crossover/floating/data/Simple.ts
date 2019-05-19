/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { Generator } from '../../../../../../lib/generator/utils';
import { FloatingIndividual } from '../../../../../../lib/individual/numeric/floating';
import { FloatingCrossoverMock } from '../FloatingCrossoverMock';

const mock: FloatingCrossoverMock[] = [
  {
    firstParent: new FloatingIndividual('0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9'),
    offspring: [
      new FloatingIndividual('0.1 0.2 0.3 0.4 0.5 0.6 0.5 0.5 0.6'),
      new FloatingIndividual('0.3 0.2 0.3 0.2 0.3 0.2 0.5 0.5 0.6'),
    ],
    params: {
      alpha: 0.5,
      engine: Generator.DEFAULT_ENGINE,
      individualConstructor: FloatingIndividual,
    },
    recombinationPoint: 6,
    secondParent: new FloatingIndividual('0.3 0.2 0.3 0.2 0.3 0.2 0.3 0.2 0.3'),
  },
  {
    firstParent: new FloatingIndividual('0.1 -0.25'),
    offspring: [new FloatingIndividual('0.1 -0.8125'), new FloatingIndividual('0.3 -0.4375')],
    params: {
      alpha: 0.25,
      engine: Generator.DEFAULT_ENGINE,
      individualConstructor: FloatingIndividual,
    },
    recombinationPoint: 1,
    secondParent: new FloatingIndividual('0.3 -1'),
  },
];

export default mock;
