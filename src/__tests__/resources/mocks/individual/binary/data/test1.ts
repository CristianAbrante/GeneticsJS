/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import BinaryIndividualMock from '../BinaryIndividualMock';

// ""
export const I: BinaryIndividualMock = {
  creation: {
    representation: '',
  },
  creationError: [
    {
      representation: 'a',
    },
    {
      representation: '010011 0 ff\ns',
    },
    {
      representation: 'otherstring',
    },
    {
      representation: '010o010',
    },
  ],
  expectedGenotype: [],
};

export default I;
