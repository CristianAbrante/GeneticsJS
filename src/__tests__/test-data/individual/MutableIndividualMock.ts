/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import MutableIndividual from '../../../lib/individual/base/MutableIndividual';
import BaseIndividualMock from './BaseIndividualMock';

interface CopyMethods<I extends MutableIndividual<T>, T> {
  change: Array<{
    geneIndex: number;
    gene: T;
  }>;
  other: I;
}

interface MutableIndividualMock<I extends MutableIndividual<T>, T> extends BaseIndividualMock<I, T> {
  copy?: Array<CopyMethods<I, T>>;
  deepCopy?: Array<CopyMethods<I, T>>;
  copyWithin?: Array<{
    params: {
      target: number;
      start?: number;
      end?: number;
    };
    expected: T[];
  }>;
  fill?: Array<{
    params: {
      gene: T;
      start?: number;
      end?: number;
    };
    expected: T[];
  }>;
  map?: Array<{
    callback: (gene: T, geneIndex?: number, genotype?: T[]) => T;
    expected: T[];
  }>;
  reverse?: {
    expected: T[];
  };
  set?: Array<{
    params: {
      geneIndex: number;
      gene: T;
    };
  }>;
}

export default MutableIndividualMock;
