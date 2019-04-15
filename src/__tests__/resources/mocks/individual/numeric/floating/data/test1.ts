/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import FloatingIndividualMock from '../FloatingIndividualMock';
import NumericIndividual from '../../../../../../../lib/individual/numeric/base/NumericIndividual';

// 3.25 -2e3 4
const I: FloatingIndividualMock = {
  creation: {
    representation: '3.25 -2e3 4',
  },
  expectedGenotype: [3.25, -2e3, 4],
  expectedRange: NumericIndividual.DEFAULT_RANGE,
};

export default I;
