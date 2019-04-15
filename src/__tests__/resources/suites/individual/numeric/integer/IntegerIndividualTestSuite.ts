/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import IntegerIndividual from '../../../../../../lib/individual/numeric/integer/IntegerIndividual';
import IntegerIndividualMock from '../../../../mocks/individual/numeric/integer/IntegerIndividualMock';

const integerIndividualTestSuite = (integerIndividualTests: IntegerIndividualMock) => {
  describe('IntegerIndividual tests', () => {
    test('creation test', () => {
      const { representation, range } = integerIndividualTests.creation;
      const individual = new IntegerIndividual(representation, range);
      expect(individual.genotype).toEqual(integerIndividualTests.expectedGenotype);
      expect(individual.range).toEqual(integerIndividualTests.expectedRange);
    });

    if (integerIndividualTests.creationError !== undefined) {
      test('creation error test', () => {
        const creationError = integerIndividualTests.creationError!;
        creationError.forEach(test => {
          const { representation, range } = test;
          expect(() => new IntegerIndividual(representation, range)).toThrow(Error);
        });
      });
    }
  });
};

export default integerIndividualTestSuite;
