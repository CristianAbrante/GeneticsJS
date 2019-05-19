/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { IntegerIndividual } from '../../../../index';

// test suites import
import BaseIndividualTestSuite from '../../../resources/suites/individual/base/BaseIndividualTestSuite';
import MutableIndividualTestSuite from '../../../resources/suites/individual/base/MutableIndividualTestSuite';
import NumericIndividualTestSuite from '../../../resources/suites/individual/numeric/base/NumericIndividualTestSuite';
import IntegerIndividualTestSuite from '../../../resources/suites/individual/numeric/integer/IntegerIndividualTestSuite';

// mocks import
import IntegerMock from '../../../resources/mocks/individual/numeric/integer/';
import IntegerIndividualMock from '../../../resources/mocks/individual/numeric/integer/IntegerIndividualMock';

const creation = (initializationParams: IntegerIndividualMock) => {
  const { representation, range } = initializationParams.creation;
  return new IntegerIndividual(representation, range);
};

Object.keys(IntegerMock).forEach(key => {
  const test = IntegerMock[key];
  describe(`tests for individual ${test.creation.representation}`, () => {
    BaseIndividualTestSuite(test, creation);
    MutableIndividualTestSuite(test, creation);
    NumericIndividualTestSuite(test, creation);
    IntegerIndividualTestSuite(test);
  });
});
