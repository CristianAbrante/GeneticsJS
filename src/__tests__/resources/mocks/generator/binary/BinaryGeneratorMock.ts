/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { MersenneTwister19937, nativeMath } from 'random-js';
import { BinaryGeneratorParams } from '../../../../../lib/generator/binary/BinaryGenerator';

const mocks: BinaryGeneratorParams[] = [
  {
    chance: 0.5,
    engine: nativeMath,
    length: 0,
  },
  {
    chance: 0.7,
    engine: MersenneTwister19937.autoSeed(),
    length: 10,
  },
  {
    chance: 0.7,
    engine: MersenneTwister19937.autoSeed(),
    length: 10,
  },
  {
    chance: 0.7,
    engine: nativeMath,
    length: 500000,
  },
  {
    chance: 0.7,
    engine: nativeMath,
    length: 5000000,
  },
];

export default mocks;
