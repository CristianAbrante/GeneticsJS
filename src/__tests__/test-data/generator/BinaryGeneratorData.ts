/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { MersenneTwister19937 } from 'random-js';
import { BinaryGeneratorParams } from './../../../lib/generator/binary/BinaryGenerator';

const params: BinaryGeneratorParams[] = [
  {
    chance: 0.3,
    engine: MersenneTwister19937.autoSeed(),
    length: 10,
  },
];

export default params;
