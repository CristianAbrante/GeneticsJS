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
      beforeEach(() => {
        individual = new indType(initialization);
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
          });
        }
      });
    });
  });
});
