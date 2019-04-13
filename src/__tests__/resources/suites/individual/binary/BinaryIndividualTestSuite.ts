/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import BinaryIndividual from '../../../../../lib/individual/binary/BinaryIndividual';
import BinaryIndividualMock from '../../../mocks/individual/binary/BinaryIndividualMock';

const binaryIndividualTestSuite = (binaryIndividualTests: BinaryIndividualMock) => {
  describe('BinaryIndividual tests', () => {
    test('creation test', () => {
      const individual = new BinaryIndividual(binaryIndividualTests.creation.representation);
      expect(individual.genotype).toEqual(binaryIndividualTests.expectedGenotype);
    });

    if (binaryIndividualTests.creationError !== undefined) {
      test('creation error test', () => {
        const creationError = binaryIndividualTests.creationError!;
        creationError.forEach(test => {
          expect(() => new BinaryIndividual(test.representation)).toThrow(Error);
        });
      });
    }
  });
};

export default binaryIndividualTestSuite;
