/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import Genetics from '../../../index';
const { BinaryIndividual } = Genetics.individuals;

export default [
  {
    definition: '0',
    expected: new BinaryIndividual([false]),
  },
  {
    definition: '1',
    expected: new BinaryIndividual([true]),
  },
];
