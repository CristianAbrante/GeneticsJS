/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { BinaryIndividual } from '../../../../../lib/individual/binary';
import MutableIndividualMock from '../../MutableIndividualMock';

// 1
export const I: MutableIndividualMock<BinaryIndividual, boolean> = {
  initialization: {
    definition: 't',
    expectedGenotype: [true],
    type: new BinaryIndividual(''),
  },
};

export default I;
