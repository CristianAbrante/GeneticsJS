/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import Genetics from './../../index';
const { IntegerIndividual } = Genetics.individuals;

const data = [
  {
    definition: '',
    expected: new IntegerIndividual([]),
  },
  {
    definition: '+0',
    expected: new IntegerIndividual([0]),
  },
  {
    definition: '-0',
    expected: new IntegerIndividual([-0]),
  },
  {
    definition: '1',
    expected: new IntegerIndividual([1]),
  },
  {
    definition: '-1 +2 -45',
    expected: new IntegerIndividual([-1, 2, -45]),
  },
  {
    definition: '-1  \n\t  +2 -45 3',
    expected: new IntegerIndividual([-1, 2, -45, 3]),
  },
  {
    definition: '  \t-1  \n\t  +20 -45000000000000000 3\t',
    expected: new IntegerIndividual([-1, 20, -45000000000000000, 3]),
  },
];

const error = ['-1-2', '4.3', '32-4', '--45', '+-4'];

export default {
  data,
  error,
};
