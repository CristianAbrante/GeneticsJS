/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { BinaryIndividual } from '../../../lib/individual/binary';
import { BitwiseMutation } from '../../../lib/mutation/binary';

describe('bitwise mutation tests', () => {
  const mutator = new BitwiseMutation();
  test('mutation with 100% probability', () => {
    const ind = new BinaryIndividual([true, false, false, true]);
    mutator.mutate(ind, 1.0);
    expect(ind.genotype).toEqual([false, true, true, false]);
  });

  test('mutation with 0% probability', () => {
    const ind = new BinaryIndividual([true, false, false, true]);
    mutator.mutate(ind, 0.0);
    expect(ind.genotype).toEqual([true, false, false, true]);
  });
});
