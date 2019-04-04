/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import Genetics from '../..';
const { BinaryIndividual } = Genetics.individuals;

const data = [
  {
    definition: '',
    expected: new BinaryIndividual([]),
  },
  {
    definition: '0',
    expected: new BinaryIndividual([false]),
  },
  {
    definition: '1',
    expected: new BinaryIndividual([true]),
  },
  {
    definition: 'f',
    expected: new BinaryIndividual([false]),
  },
  {
    definition: 't',
    expected: new BinaryIndividual([true]),
  },
  {
    definition: 'F',
    expected: new BinaryIndividual([false]),
  },
  {
    definition: 'T',
    expected: new BinaryIndividual([true]),
  },
  {
    definition: '01001011',
    expected: new BinaryIndividual([false, true, false, false, true, false, true, true]),
  },
  {
    definition: 'tffttf',
    expected: new BinaryIndividual([true, false, false, true, true, false]),
  },
  {
    definition: 'TFFTTT',
    expected: new BinaryIndividual([true, false, false, true, true, true]),
  },
  {
    definition: '0fTtf1tF',
    expected: new BinaryIndividual([false, false, true, true, false, true, true, false]),
  },
  {
    definition: '  0 011 10',
    expected: new BinaryIndividual([false, false, true, true, true, false]),
  },
  {
    definition: '\n0\n1\n1\n0',
    expected: new BinaryIndividual([false, true, true, false]),
  },
  {
    definition: '\t\t0\tt\nt\t0\t\n',
    expected: new BinaryIndividual([false, true, true, false]),
  },
  {
    definition: '\r0T\nT\tt\nt\r 0F  0\t\n',
    expected: new BinaryIndividual([false, true, true, true, true, false, false, false]),
  },
];

const error = ['other', '010011d', '  01 1o1', '\t\ts'];

export default {
  data,
  error,
};
