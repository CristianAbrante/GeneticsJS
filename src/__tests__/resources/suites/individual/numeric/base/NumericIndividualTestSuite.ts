/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { NumericIndividual } from './../../../../../../lib/individual/numeric/base';
import NumericIndividualMock from './../../../../mocks/individual/numeric/base/NumericIndividualMock';

type CreationCallback<I extends NumericIndividual> = (numericIndividualTests: NumericIndividualMock<I>) => I;

const numericIndividualTestSuite = (
  numericIndividualTests: NumericIndividualMock<NumericIndividual>,
  creation: CreationCallback<NumericIndividual>,
) => {
  describe('NumericIndividual tests', () => {
    let individual = creation(numericIndividualTests);

    beforeEach(() => (individual = creation(numericIndividualTests)));

    if (numericIndividualTests.setError !== undefined) {
      test('set with range error', () => {
        const setError = numericIndividualTests.setError!;
        setError.forEach(test => {
          const { geneIndex, gene } = test.params;
          expect(() => individual.set(geneIndex, gene)).toThrow(RangeError);
        });
      });
    }
    if (numericIndividualTests.fillError !== undefined) {
      test('fill with range error', () => {
        const fillError = numericIndividualTests.fillError!;
        fillError.forEach(test => {
          const { gene, start, end } = test.params;
          expect(() => individual.fill(gene, start, end)).toThrow(RangeError);
        });
      });
    }
    if (numericIndividualTests.mapError !== undefined) {
      test('map with range error', () => {
        const mapError = numericIndividualTests.mapError!;
        mapError.forEach(test => {
          const { callback } = test.params;
          expect(() => individual.map(callback)).toThrow(RangeError);
        });
      });
    }
  });
};

export default numericIndividualTestSuite;
