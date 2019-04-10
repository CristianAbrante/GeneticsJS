/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import Genetics from '../..';
const { FloatingIndividual } = Genetics.individuals;

const data = [
  {
    definition: '',
    expected: new FloatingIndividual([]),
  },
  {
    definition: '0',
    expected: new FloatingIndividual([0]),
  },
  {
    definition: '-3.45',
    expected: new FloatingIndividual([-3.45]),
  },
  {
    definition: '2 9 7 8',
    expected: new FloatingIndividual([2, 9, 7, 8]),
  },
  {
    definition: '\t\t-3.67 \n0.56 2e-3   \n',
    expected: new FloatingIndividual([-3.67, 0.56, 0.002]),
  },
  {
    definition: '\t\t5 \n0.56 2e-3 -.88899998  \n',
    expected: new FloatingIndividual([5, 0.56, 0.002, -0.88899998]),
  },
];

const error = ['3.45.45', '--34.5', '-45e-3.28', 'letter', '.56e-.3'];

export default { data, error };
