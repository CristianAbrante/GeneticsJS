/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import NumericIndividual, { NumericRange } from '../../../../../../lib/individual/numeric/base/NumericIndividual';
import MutableIndividualMock from '../../base/MutableIndividualMock';

interface NumericIndividualMock<I extends NumericIndividual> extends MutableIndividualMock<I, number> {
  expectedRange: NumericRange;
  setError?: Array<{
    params: {
      geneIndex: number;
      gene: number;
    };
  }>;
  fillError?: Array<{
    params: {
      gene: number;
      start?: number;
      end?: number;
    };
  }>;
  mapError?: Array<{
    params: {
      callback: (gene: number, geneIndex?: number, genotype?: number[]) => number;
    };
  }>;
}

export default NumericIndividualMock;
