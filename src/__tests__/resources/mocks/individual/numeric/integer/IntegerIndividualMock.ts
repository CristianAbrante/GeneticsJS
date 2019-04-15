/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { NumericRange } from '../../../../../../lib/individual/numeric/base';
import IntegerIndividual from '../../../../../../lib/individual/numeric/integer/IntegerIndividual';
import NumericIndividualMock from '../base/NumericIndividualMock';

interface IntegerIndividualMock extends NumericIndividualMock<IntegerIndividual> {
  creation: {
    representation: number[] | string;
    range?: NumericRange;
  };
  creationError?: Array<{
    representation: number[] | string;
    range?: NumericRange;
  }>;
}

export default IntegerIndividualMock;
