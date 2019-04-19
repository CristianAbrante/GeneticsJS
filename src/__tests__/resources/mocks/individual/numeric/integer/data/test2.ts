/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { NumericRange } from '../../../../../../../lib/individual/numeric/base';
import IntegerIndividualMock from '../IntegerIndividualMock';

const I: IntegerIndividualMock = {
  creation: {
    representation: [4.889, -3.25, 8.95],
  },
  expectedGenotype: [5, -3, 9],
  expectedRange: NumericRange.DEFAULT,
};

export default I;
