/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import Binary from './../../../lib/individual/numeric/binary';

const testIndividuals = [
  {
    fill: [
      {
        end: 6,
        start: 0,
        value: false
      },
      {
        end: 4,
        start: 0,
        value: false
      },
    ],
    find: [
      {
        callback: (element: boolean) => {
          return element;
        },
        expected: true,
        index: 1
      }
    ],
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

  const initializeIndividual = () => {
    ind = new individual.type(individualName);
  };

  beforeEach(() => {
    initializeIndividual();
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
  });

  test('every test', () => {
    let i = 0;
    expect(ind.every(gene => {
      return gene === expectedGenotype[i++];
    }))
  });

  test('fill test', () => {
    const fillTests = individual.fill;
    fillTests.forEach(fillTest => {
      initializeIndividual();
      const {end, start, value} = fillTest;
      const dummy = [...expectedGenotype];
      const expected = dummy.fill(value, start, end);
      expect(ind.fill(value, start, end)).toEqual(expected);
    });
  });

  test('find test', () => {
    const findTests = individual.find;
    findTests.forEach((findTest: any) => {
      const {callback, expected} = findTest;
      expect(ind.find(callback)).toEqual(expected)
    });
  });

  test('find index test', () => {
    const findTests = individual.find;
    findTests.forEach((findTest: any) => {
      const {callback, index} = findTest;
      expect(ind.findIndex(callback)).toEqual(index)
    });
  });

  test('find index test', () => {
    const findTests = individual.find;
    findTests.forEach((findTest: any) => {
      const {callback, index} = findTest;
      expect(ind.findIndex(callback)).toEqual(index)
    });
  });

  test('for each test', () => {
    let i = 0;
    const result = ind.forEach(gene => {
      expect(gene).toEqual(expectedGenotype[i++]);
    });
    expect(result).toBeUndefined();
  });
});