/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import BaseIndividual from '../../../../../lib/individual/base/BaseIndividual';
import BaseIndividualMock from '../../../mocks/individual/base/BaseIndividualMock';

type CreationCallback<I extends BaseIndividual<T>, T> = (...params: any[]) => I;

const baseIndividualTestSuite = <I extends BaseIndividual<T>, T>(
  mockIndividualTest: BaseIndividualMock<I, T>,
  creation: CreationCallback<I, T>,
) => {
  describe('BaseIndividual tests', () => {
    let individual = creation(mockIndividualTest);
    const expectedGenotype = mockIndividualTest.expectedGenotype;

    beforeEach(() => {
      individual = creation(mockIndividualTest);
    });

    test(`iteration test`, () => {
      let index = 0;
      for (const gene of individual) {
        expect(gene).toEqual(expectedGenotype[index++]);
      }
    });

    test('naive get test', () => {
      expectedGenotype.forEach((expectedGene, geneIndex) => {
        expect(individual.get(geneIndex)).toBe(expectedGene);
      });
    });

    if (mockIndividualTest.get !== undefined) {
      test('get test', () => {
        mockIndividualTest.get!.forEach(test => {
          expect(individual.get(test.params)).toEqual(test.expected);
        });
      });
    }

    test('get throws positive', () => {
      expect(() => individual.get(Infinity)).toThrow(RangeError);
    });

    test('get throws negative', () => {
      expect(() => individual.get(-10)).toThrow(RangeError);
    });

    if (mockIndividualTest.length !== undefined) {
      test('length test', () => {
        expect(individual.length()).toEqual(mockIndividualTest.length!.expected);
      });
    }

    test('entries test', () => {
      const entries = individual.entries();
      expectedGenotype.forEach((expectedGene, expectedIndex) => {
        const next = entries.next();
        expect(next.value[1]).toEqual(expectedGene);
        expect(next.value[0]).toEqual(expectedIndex);
        expect(next.done).toBeFalsy();
      });
      const nextOut = entries.next();
      expect(nextOut.value).toBeUndefined();
      expect(nextOut.done).toBeTruthy();
    });

    test('naive every test', () => {
      let i = 0;
      expect(
        individual.every((gene: any) => {
          return gene === expectedGenotype[i++];
        }),
      ).toBeTruthy();
    });

    if (mockIndividualTest.every !== undefined) {
      test('every test', () => {
        mockIndividualTest.every!.forEach(everyTest => {
          expect(individual.every(everyTest.callback)).toEqual(everyTest.expected);
        });
      });
    }

    if (mockIndividualTest.find !== undefined) {
      test('find test', () => {
        mockIndividualTest.find!.forEach(findTest => {
          expect(individual.find(findTest.callback)).toEqual(findTest.expected);
        });
      });
    }

    if (mockIndividualTest.findIndex !== undefined) {
      test('findIndex test', () => {
        mockIndividualTest.findIndex!.forEach(findIndexTest => {
          expect(individual.findIndex(findIndexTest.callback)).toEqual(findIndexTest.expected);
        });
      });
    }

    test('naive forEach test', () => {
      let i = 0;
      const result = individual.forEach((gene: any) => {
        expect(gene).toEqual(expectedGenotype[i++]);
      });
      expect(result).toBeUndefined();
    });

    if (mockIndividualTest.includes !== undefined) {
      test('includes test', () => {
        mockIndividualTest.includes!.forEach(includesTest => {
          const { gene, startIndex } = includesTest.params;
          expect(individual.includes(gene, startIndex)).toEqual(includesTest.expected);
        });
      });
    }

    if (mockIndividualTest.indexOf !== undefined) {
      test('indexOf test', () => {
        mockIndividualTest.indexOf!.forEach(indexOfTest => {
          const { gene, startIndex } = indexOfTest.params;
          expect(individual.indexOf(gene, startIndex)).toEqual(indexOfTest.expected);
        });
      });
    }

    test('keys test', () => {
      const keys = individual.keys();
      expectedGenotype.forEach((_, expectedIndex) => {
        const next = keys.next();
        expect(next.value).toEqual(expectedIndex);
        expect(next.done).toBeFalsy();
      });
      const outNext = keys.next();
      expect(outNext.value).toBeUndefined();
      expect(outNext.done).toBeTruthy();
    });

    if (mockIndividualTest.lastIndexOf !== undefined) {
      test('lastIndexOf test', () => {
        mockIndividualTest.lastIndexOf!.forEach(lastIndexOftest => {
          const { gene, fromIndex } = lastIndexOftest.params;
          expect(individual.lastIndexOf(gene, fromIndex)).toEqual(lastIndexOftest.expected);
        });
      });
    }

    if (mockIndividualTest.some !== undefined) {
      test('some test', () => {
        mockIndividualTest.some!.forEach(someTest => {
          expect(individual.some(someTest.callback)).toEqual(someTest.expected);
        });
      });
    }

    if (mockIndividualTest.toStringTest !== undefined) {
      test('toString test', () => {
        expect(individual.toString()).toEqual(mockIndividualTest.toStringTest!.expected);
      });
    }

    test('values test', () => {
      const values = individual.values();
      expectedGenotype.forEach(expectedGene => {
        const next = values.next();
        expect(next.value).toEqual(expectedGene);
        expect(next.done).toBeFalsy();
      });
      const outNext = values.next();
      expect(outNext.value).toBeUndefined();
      expect(outNext.done).toBeTruthy();
    });
  });
};

export default baseIndividualTestSuite;
