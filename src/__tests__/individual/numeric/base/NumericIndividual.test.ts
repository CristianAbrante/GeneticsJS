/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { IntegerIndividual } from '../../../../lib/individual/numeric/integer';

describe('range error test', () => {
  const individual = new IntegerIndividual([2, -4, 5]);

  test('invalid range intialization', () => {
    expect(() => {
      const ind = new IntegerIndividual([], { lowest: 7, highest: 5 });
    }).toThrow(Error);
  });

  test('copy test', () => {
    const genotype = [3, 4, 5];
    const a = new IntegerIndividual(genotype, { lowest: 0, highest: 10 });
    const b = new IntegerIndividual([7, 8, 9], { lowest: 5, highest: 10 });
    b.copy(a);
    expect(b.genotype).toEqual(genotype);
    genotype[1] = 3;
    expect(a.get(1)).toEqual(4);
    expect(b.get(1)).toEqual(4);
  });

  test('set out of range', () => {
    const ind = new IntegerIndividual([2, 4, 6], { lowest: 3, highest: 8 });
    ind.set(1, 5);
    expect(ind.get(1)).toEqual(5);
    ind.set(1, 3);
    expect(ind.get(1)).toEqual(3);
    ind.set(1, 8);
    expect(ind.get(1)).toEqual(8);

    expect(() => ind.set(1, 40)).toThrow(RangeError);
  });

  test('fill out of range', () => {
    const ind = new IntegerIndividual([2, 4, 6], { lowest: 3, highest: 8 });
    expect(() => ind.fill(40)).toThrow(RangeError);
  });

  test('map out of range test', () => {
    const ind = new IntegerIndividual([2, 4, 6], { lowest: 3, highest: 8 });
    expect(() => ind.map(gene => 40 * gene)).toThrow(RangeError);
  });
});
