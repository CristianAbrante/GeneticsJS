/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import Binary from './../../../lib/individual/numeric/binary';

const testIndividuals = [
  {
    genotype: [false, true, false, false, true, false, false, false],
    initialization: "01001000",
    set: [
      {
        newValue: false,
        position: 4
      },
      {
        newValue: true,
        position: 0
      },
      {
        newValue: false,
        position: 0
      },
      {
        newValue: true,
        position: 7
      }
    ],
    type: Binary.Individual
  }
];

testIndividuals.forEach((individual) => {
  const individualName = individual.initialization;
  const expectedGenotype = individual.genotype;
  let ind = new individual.type(individualName);

  beforeEach(() => {
    ind = new individual.type(individualName);
  });

  test(`Creation test`, () => {
    expect(ind.genotype).toEqual(individual.genotype);
  });

  test(`Iteration test`, () => {
    let index = 0;
    for (const gene of ind) {
      expect(gene).toBe(expectedGenotype[index++]);
    }
  });

  test(`get test`, () => {
    expectedGenotype.forEach((expectedGene, geneIndex) => {
      expect(ind.get(geneIndex)).toBe(expectedGene);
    })
  });

  test(`get throws positive`, () => {
    expect(() => ind.get(10000)).toThrow(RangeError);
  });

  test(`get throws negative`, () => {
    expect(() => ind.get(-10)).toThrow(RangeError);
  });

  test('set test', () => {
    const setTests = individual.set;
    setTests.forEach(test => {
      ind.set(test.position, test.newValue);
      expect(ind.get(test.position)).toBe(test.newValue);
    })
  });

  test(`set throws positive`, () => {
    expect(() => ind.get(10000)).toThrow(RangeError);
  });

  test(`set throws negative`, () => {
    expect(() => ind.get(-10)).toThrow(RangeError);
  });

  test('length test', () => {
    expect(ind.length()).toBe(expectedGenotype.length);
  });

  test('entries test', () => {
    const iterator = ind.entries();
    expectedGenotype.forEach((expectedGene, geneIndex) => {
      const next = iterator.next();
      expect(next.value[0]).toBe(geneIndex);
      expect(next.value[1]).toBe(expectedGene);
      expect(next.done).toBeFalsy();
    });
    const nextOut = iterator.next();
    expect(nextOut.value).toBeUndefined();
    expect(nextOut.done).toBeTruthy();
  })
});