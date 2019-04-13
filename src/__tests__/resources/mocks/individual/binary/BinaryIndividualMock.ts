/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { BinaryIndividual } from '../../../../../lib/individual/binary';
import MutableIndividualMock from '../base/MutableIndividualMock';

interface BinaryIndividualMock extends MutableIndividualMock<BinaryIndividual, boolean> {
  creation: {
    representation: string | boolean[];
  };
  creationError?: Array<{
    representation: string | boolean[];
  }>;
}

export default BinaryIndividualMock;
