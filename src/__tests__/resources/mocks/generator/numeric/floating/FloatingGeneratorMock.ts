/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { MersenneTwister19937 } from 'random-js';
import { NumericParams } from '../../../../../../lib/generator/numeric/base/NumericGenerator';
import { NumericRange } from '../../../../../../lib/individual/numeric/base';

const floatingMock: NumericParams[] = [
  {
    engine: MersenneTwister19937.autoSeed(),
    length: 10,
    range: new NumericRange(3.8, 14),
  },
];

export default floatingMock;
