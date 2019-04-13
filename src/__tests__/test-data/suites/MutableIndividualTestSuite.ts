/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import MutableIndividual from '../../../lib/individual/base/MutableIndividual';
import MutableIndividualMock from '../individual/MutableIndividualMock';
import BaseIndividualTestSuite from './BaseIndividualTestSuite';

type CreationCallback<I extends MutableIndividual<T>, T> = (
  initializationParams: MutableIndividualMock<I, T>['initialization'],
) => I;

const mutableIndividualTestSuite = <I extends MutableIndividual<T>, T>(
  mockIndividualTest: MutableIndividualMock<I, T>,
  creation: CreationCallback<I, T>,
) => {
  // Execution of the test suit for base individuals.
  BaseIndividualTestSuite(mockIndividualTest, creation);

  describe(`MutableIndividual tests for individual ${mockIndividualTest.initialization.definition}`, () => {
    let individual = creation(mockIndividualTest.initialization);

    const initialize = () => {
      individual = creation(mockIndividualTest.initialization);
    };

    beforeEach(() => {
      initialize();
    });

    test('copy test', () => {
      const copyTest = mockIndividualTest.copy;
      if (copyTest !== undefined) {
        copyTest.forEach(test => {
          initialize();
          individual.copy(test.other);
          expect(individual.genotype).toEqual(test.other.genotype);
          test.change.forEach(change => {
            individual.set(change.geneIndex, change.gene);
          });
          expect(individual.genotype).toEqual(test.other.genotype);
        });
      }
    });

    test('deepCopy test', () => {
      const copyTest = mockIndividualTest.deepCopy;
      if (copyTest !== undefined) {
        copyTest.forEach(test => {
          initialize();
          individual.deepCopy(test.other);
          expect(individual.genotype).toEqual(test.other.genotype);
          test.change.forEach(change => {
            individual.set(change.geneIndex, change.gene);
          });
          expect(individual.genotype).not.toEqual(test.other.genotype);
        });
      }
    });

    test('copyWithin test', () => {
      const copyWithinTests = mockIndividualTest.copyWithin;
      if (copyWithinTests !== undefined) {
        copyWithinTests.forEach(test => {
          initialize();
          const { target, start, end } = test.params;
          individual.copyWithin(target, start, end);
          expect(individual.genotype).toEqual(test.expected);
        });
      }
    });

    test('fill test', () => {
      const fillTests = mockIndividualTest.fill;
      if (fillTests !== undefined) {
        fillTests.forEach(test => {
          initialize();
          const { gene, start, end } = test.params;
          individual.fill(gene, start, end);
          expect(individual.genotype).toEqual(test.expected);
        });
      }
    });

    test('map test', () => {
      const mapTests = mockIndividualTest.map;
      if (mapTests !== undefined) {
        mapTests.forEach(test => {
          initialize();
          individual.map(test.callback);
          expect(individual.genotype).toEqual(test.expected);
        });
      }
    });

    test('reverse test', () => {
      const reverseTest = mockIndividualTest.reverse;
      if (reverseTest !== undefined) {
        individual.reverse();
        expect(individual.genotype).toEqual(reverseTest.expected);
      }
    });

    test('set test', () => {
      const setTests = mockIndividualTest.set;
      if (setTests !== undefined) {
        setTests.forEach(test => {
          const { geneIndex, gene } = test.params;
          individual.set(geneIndex, gene);
          expect(individual.get(geneIndex)).toEqual(gene);
        });
      }
    });
  });
};

export default mutableIndividualTestSuite;
