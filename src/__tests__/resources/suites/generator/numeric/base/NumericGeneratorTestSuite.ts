/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import NumericGenerator, { NumericParams } from '../../../../../../lib/generator/numeric/base/NumericGenerator';
import NumericIndividual from '../../../../../../lib/individual/numeric/base/NumericIndividual';

const numericIndividualTestSuite = <
  G extends NumericGenerator<I>,
  I extends NumericIndividual,
  Params extends NumericParams
>(
  generator: G,
  individual: I,
  params: Params,
) => {
  test('range check test', () => {
    const { range } = params;
    individual.forEach(gene => {
      expect(range.lowest <= gene && gene <= range.highest).toBeTruthy();
    });
  });
};

export default numericIndividualTestSuite;
