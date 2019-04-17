/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { IntegerIndividual } from '../../../../../lib/individual/numeric/integer/';
import ReaderMock from '../ReaderMock';

const creation: ReaderMock<IntegerIndividual, number>['creation'] = [
  {
    expected: new IntegerIndividual([]),
    representation: '',
  },
  {
    expected: new IntegerIndividual([0]),
    representation: '+0',
  },
  {
    expected: new IntegerIndividual([-0]),
    representation: '-0',
  },
  {
    expected: new IntegerIndividual([1]),
    representation: '1',
  },
  {
    expected: new IntegerIndividual([-1, 2, -45]),
    representation: '-1 +2 -45',
  },
  {
    expected: new IntegerIndividual([-1, 2, -45, 3]),
    representation: '-1  \n\t  +2 -45 3',
  },
  {
    expected: new IntegerIndividual([-1, 20, -45000000000000000, 3]),
    representation: '  \t-1  \n\t  +20 -45000000000000000 3\t',
  },
];

const error: ReaderMock<IntegerIndividual, number>['error'] = ['-1-2', '4.3', '32-4', '--45', '+-4'];

const mock: ReaderMock<IntegerIndividual, number> = {
  creation,
  error,
};

export default mock;
