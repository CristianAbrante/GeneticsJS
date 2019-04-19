/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { NumericRange } from '../../../../../../../lib/individual/numeric/base';
import FloatingIndividualMock from '../FloatingIndividualMock';

// 3.25 -2e3 4
const I: FloatingIndividualMock = {
  creation: {
    representation: '3.25 -2e3 4',
  },
  expectedGenotype: [3.25, -2e3, 4],
  expectedRange: NumericRange.DEFAULT,
};

export default I;
