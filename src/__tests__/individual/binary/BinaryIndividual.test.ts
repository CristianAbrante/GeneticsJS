/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { BinaryIndividual } from '../../../lib/individual/binary';
import BaseIndividualTests from '../../test-data/BaseIndividualTest';
import BaseIndividualMock from '../../test-data/individual/BaseIndividualMock';
import BaseIndividualMocks from '../../test-data/individual/binary';
import baseIndividualTests from '../../test-data/suites/BaseIndividual';

const creation = (initializationParams: BaseIndividualMock<BinaryIndividual, boolean>['initialization']) => {
  return new BinaryIndividual(initializationParams.definition);
};

Object.keys(BaseIndividualMocks).forEach(key => {
  const test = BaseIndividualMocks[key];
  baseIndividualTests<BinaryIndividual, boolean>(test, creation);
});

describe('binary individual test', () => {
  BaseIndividualTests.forEach(individualTest => {
    const initialization = individualTest.initialization.value;
    const expectedGenotype = individualTest.initialization.genotype;
    const indType = individualTest.initialization.type;
    let individual = new indType(initialization);

    test('creation error', () => {
      ['a', '010011 0 ff\rs', 'otherstring', '010o010'].forEach(initializationMsg => {
        expect(() => new BinaryIndividual(initializationMsg)).toThrow(Error);
      });
    });

    describe(`individual ${individual.toString()}`, () => {
      beforeEach(() => {
        individual = new indType(initialization);
      });

      test('creation test', () => {
        expect(individual.genotype).toEqual(expectedGenotype);
      });
    });
  });
});
