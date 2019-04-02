/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import BaseIndividualTest from '../../test-individuals/BaseIndividualTest';

describe('MutableIndividual methods tests', () => {
  BaseIndividualTest.forEach(individualTest => {
    const initialization = individualTest.initialization.value;
    const expectedGenotype = individualTest.initialization.genotype;
    const indType = individualTest.initialization.type;
    let individual = new indType(initialization);

    describe(`individual ${individual.toString()} tests`, () => {
      const initializeIndividual = () => {
        individual = new indType(initialization);
      };

      beforeEach(() => {
        initializeIndividual();
      });

      test('copy test', () => {
        const copyTest = individualTest.copy;
        if (copyTest !== undefined) {
          copyTest.forEach(test => {
            individual.copy(test.params);
            expect(individual.genotype).toEqual(test.expected);
            test.change.forEach(change => {
              test.params.set(change.pos, change.value);
              expect(individual.get(change.pos)).toEqual(change.value);
            });
          });
        }
      });

      test('deep copy test', () => {
        const copyTest = individualTest.deepCopy;
        if (copyTest !== undefined) {
          copyTest.forEach(test => {
            individual.deepCopy(test.params);
            expect(individual.genotype).toEqual(test.expected);
            test.change.forEach(change => {
              test.params.set(change.pos, change.value);
              expect(individual.get(change.pos)).toEqual(test.expected[change.pos]);
            });
            initializeIndividual();
          });
        }
      });

      test('copy within test', () => {
        const copyWithinTest = individualTest.copyWithin;
        if (copyWithinTest !== undefined) {
          copyWithinTest.forEach(test => {
            individual.copyWithin(test.target, test.start, test.end);
            expect(individual.genotype).toEqual(test.expected);
            initializeIndividual();
          });
        }
      });

      test('set test', () => {
        const setTest = individualTest.set;
        if (setTest !== undefined) {
          setTest.forEach(test => {
            test.params.forEach(param => {
              // @ts-ignore
              const index = param[0] as number;
              individual.set(index, param[1] as boolean);
              expectedGenotype[index] = param[1] as boolean;
              expect(individual.get(index)).toEqual(expectedGenotype[index]);
            });
            initializeIndividual();
          });
        }
      });

      test('fill test', () => {
        const fillTest = individualTest.fill;
        if (fillTest !== undefined) {
          fillTest.forEach(test => {
            // @ts-ignore
            individual.fill(test.params[0], test.params[1], test.params[2]);
            expect(individual.genotype).toEqual(test.expected);
            initializeIndividual();
          });
        }
      });

      test('map test', () => {
        const mapTest = individualTest.map;
        if (mapTest !== undefined) {
          mapTest.forEach(test => {
            individual.map(test.params);
            expect(individual.genotype).toEqual(test.expected);
            initializeIndividual();
          });
        }
      });

      test('reverse test', () => {
        const reverseTest = individualTest.reverse;
        if (reverseTest !== undefined) {
          individual.reverse();
          expect(individual.genotype).toEqual(reverseTest.expected);
        }
      });
    });
  });
});
