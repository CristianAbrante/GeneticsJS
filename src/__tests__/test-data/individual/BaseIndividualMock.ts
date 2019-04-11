/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import BaseIndividual from '../../../lib/individual/base/BaseIndividual';

interface GeneConditionCallback<T, E> {
  expected: E;
  callback: (gene: T, geneIndex?: number, genotype?: T[]) => boolean;
}

interface BaseIndividualMock<I extends BaseIndividual<T>, T> {
  initialization: {
    expectedGenotype: T[];
    type: I;
    definition: string | T[];
  };
  get?: Array<{
    params: number;
    expected: T;
  }>;
  length?: {
    expected: number;
  };
  every?: Array<GeneConditionCallback<T, boolean>>;
  find?: Array<GeneConditionCallback<T, boolean>>;
  findIndex?: Array<GeneConditionCallback<T, number>>;
  includes?: Array<{
    expected: boolean;
    params: {
      gene: T;
      startIndex?: number;
    };
  }>;
  indexOf?: Array<{
    expected: number;
    params: {
      gene: T;
      startIndex?: number;
    };
  }>;
  lastIndexOf?: Array<{
    expected: number;
    params: {
      gene: T;
      fromIndex?: number;
    };
  }>;
  some?: Array<GeneConditionCallback<T, boolean>>;
  toStringTest?: {
    expected: string;
  };
}

export default BaseIndividualMock;
