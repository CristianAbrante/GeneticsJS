/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import Genetics from '../../../../index';
const { IntegerIndividual } = Genetics.individuals;

describe('integer individual test', () => {
  test('constructor test', () => {
    const individual = new IntegerIndividual([2.45, 3.28, 5.01, 6.5001]);
    expect(individual.genotype).toEqual([2, 3, 5, 7]);
  });

  test('fill test', () => {
    const individual = new IntegerIndividual([2.45, 3.28, 5.01, 6.5001]);
    individual.fill(4.4999999999999);
    expect(individual.genotype).toEqual([4, 4, 4, 4]);
  });

  test('set test', () => {
    const individual = new IntegerIndividual([2.45, 3.28, 5.01, 6.5001]);
    individual.set(1, 8.9);
    expect(individual.get(1)).toEqual(9);
    individual.set(1, 100000);
    expect(individual.get(1)).toEqual(100000);
    individual.set(1, -100000);
    expect(individual.get(1)).toEqual(-100000);
  });
});
