/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { NumericRange } from '../../../../../../lib/individual/numeric/base';
import FloatingIndividual from '../../../../../../lib/individual/numeric/floating/FloatingIndividual';
import NumericIndividualMock from '../base/NumericIndividualMock';

interface FloatingIndividualMock extends NumericIndividualMock<FloatingIndividual> {
  creation: {
    representation: string | number[];
    range?: NumericRange;
  };
  creationError: Array<{
    representation: string | number[];
    range?: NumericRange;
  }>;
}

export default FloatingIndividualMock;
