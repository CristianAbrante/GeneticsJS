/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import Genetics from '../../../../index';
const { FloatingIndividual } = Genetics.individual;

// test suites import
import BaseIndividualTestSuite from '../../../resources/suites/individual/base/BaseIndividualTestSuite';
import MutableIndividualTestSuite from '../../../resources/suites/individual/base/MutableIndividualTestSuite';
import NumericIndividualTestSuite from '../../../resources/suites/individual/numeric/base/NumericIndividualTestSuite';
import FloatingIndividualTestSuite from '../../../resources/suites/individual/numeric/floating/FloatingIndividualTestSuite';

// mocks import
import FloatingMock from '../../../resources/mocks/individual/numeric/floating/';
import FloatingIndividualMock from '../../../resources/mocks/individual/numeric/floating/FloatingIndividualMock';

const creation = (initializationParams: FloatingIndividualMock) => {
  const { representation, range } = initializationParams.creation;
  return new FloatingIndividual(representation, range);
};

Object.keys(FloatingMock).forEach(key => {
  const test = FloatingMock[key];
  describe(`tests for individual ${test.creation.representation}`, () => {
    BaseIndividualTestSuite(test, creation);
    MutableIndividualTestSuite(test, creation);
    NumericIndividualTestSuite(test, creation);
    FloatingIndividualTestSuite(test);
  });
});
