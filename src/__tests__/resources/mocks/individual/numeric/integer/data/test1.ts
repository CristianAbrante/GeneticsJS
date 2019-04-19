/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { NumericRange } from '../../../../../../../lib/individual/numeric/base';
import { FloatingIndividual } from '../../../../../../../lib/individual/numeric/floating';
import { IntegerIndividual } from '../../../../../../../lib/individual/numeric/integer';
import IntegerIndividualMock from '../IntegerIndividualMock';

// 2 -3 4 5.25
const I: IntegerIndividualMock = {
  copy: [
    {
      change: [
        {
          gene: 3,
          geneIndex: 1,
        },
      ],
      other: new IntegerIndividual([3, 5, 6, 7]),
    },
    {
      change: [
        {
          gene: 3,
          geneIndex: 1,
        },
      ],
      other: new FloatingIndividual([3.25, 5, 6.75, 7]),
    },
  ],
  creation: {
    representation: '2 -3 4 5',
  },
  creationError: [
    {
      range: new NumericRange(5, 7),
      representation: [-1, 0, 3],
    },
  ],
  deepCopy: [
    {
      change: [
        {
          gene: 3,
          geneIndex: 1,
        },
      ],
      other: new IntegerIndividual([3, 5, 6, 7]),
    },
  ],
  expectedGenotype: [2, -3, 4, 5],
  expectedRange: NumericRange.DEFAULT,
};

export default I;
