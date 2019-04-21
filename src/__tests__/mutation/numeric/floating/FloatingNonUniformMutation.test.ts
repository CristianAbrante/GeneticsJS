/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { NumericRange } from '../../../../lib/individual/numeric/base';
import { FloatingIndividual } from '../../../../lib/individual/numeric/floating';
import { FloatingNonuniformMutation } from '../../../../lib/mutation/numeric/floating';

describe('FloatingUniformMutation tests', () => {
  const mutator = new FloatingNonuniformMutation();
  test('Generation test', () => {
    const ind = new FloatingIndividual([2, 4, 5, 8], new NumericRange(0, 9));
    const newInd = new FloatingIndividual('');
    for (let i = 0; i < 1000; i++) {
      newInd.deepCopy(ind);
      expect(newInd.genotype).toEqual(ind.genotype);
      mutator.mutate(newInd, 0.99);
      expect(newInd.range).toEqual(ind.range);
      newInd.forEach(gene => expect(NumericRange.isValueInRange(gene, newInd.range)).toBeTruthy());
    }
  });
});
