/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import MutableIndividual from '../../../../../lib/individual/base/MutableIndividual';
import MutableIndividualMock from '../../../mocks/individual/base/MutableIndividualMock';

type CreationCallback<I extends MutableIndividual<T>, T> = (...params: any[]) => I;

const mutableIndividualTestSuite = <I extends MutableIndividual<T>, T>(
  mockIndividualTest: MutableIndividualMock<I, T>,
  creation: CreationCallback<I, T>,
) => {
  describe('MutableIndividual tests', () => {
    let individual = creation(mockIndividualTest);

    const initialize = () => {
      individual = creation(mockIndividualTest);
    };

    beforeEach(() => {
      initialize();
    });

    if (mockIndividualTest.copy !== undefined) {
      test('copy test', () => {
        const copyTest = mockIndividualTest.copy!;
        copyTest.forEach(test => {
          initialize();
          individual.copy(test.other);
          expect(individual.genotype).toEqual(test.other.genotype);
          test.change.forEach(change => {
            individual.set(change.geneIndex, change.gene);
          });
          expect(individual.genotype).toEqual(test.other.genotype);
        });
      });
    }

    if (mockIndividualTest.deepCopy !== undefined) {
      test('deepCopy test', () => {
        const copyTest = mockIndividualTest.deepCopy;
        copyTest!.forEach(test => {
          initialize();
          individual.deepCopy(test.other);
          expect(individual.genotype).toEqual(test.other.genotype);
          test.change.forEach(change => {
            individual.set(change.geneIndex, change.gene);
          });
          expect(individual.genotype).not.toEqual(test.other.genotype);
        });
      });
    }

    if (mockIndividualTest.copyWithin !== undefined) {
      test('copyWithin test', () => {
        const copyWithinTests = mockIndividualTest.copyWithin!;
        copyWithinTests.forEach(test => {
          initialize();
          const { target, start, end } = test.params;
          individual.copyWithin(target, start, end);
          expect(individual.genotype).toEqual(test.expected);
        });
      });
    }

    if (mockIndividualTest.fill !== undefined) {
      test('fill test', () => {
        const fillTests = mockIndividualTest.fill!;
        fillTests.forEach(test => {
          initialize();
          const { gene, start, end } = test.params;
          individual.fill(gene, start, end);
          expect(individual.genotype).toEqual(test.expected);
        });
      });
    }

    if (mockIndividualTest.map !== undefined) {
      test('map test', () => {
        const mapTests = mockIndividualTest.map!;
        mapTests.forEach(test => {
          initialize();
          individual.map(test.callback);
          expect(individual.genotype).toEqual(test.expected);
        });
      });
    }

    if (mockIndividualTest.reverse !== undefined) {
      test('reverse test', () => {
        const reverseTest = mockIndividualTest.reverse!;
        individual.reverse();
        expect(individual.genotype).toEqual(reverseTest.expected);
      });
    }

    if (mockIndividualTest.set !== undefined) {
      test('set test', () => {
        const setTests = mockIndividualTest.set!;
        setTests.forEach(test => {
          const { geneIndex, gene } = test.params;
          individual.set(geneIndex, gene);
          expect(individual.get(geneIndex)).toEqual(gene);
        });
      });
    }
  });
};

export default mutableIndividualTestSuite;
