/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { BinaryIndividual } from '../../../lib/individual/binary';
import BinaryIndividualMocks from '../../resources/mocks/individual/binary';

// import mock interfaces
import BinaryIndividualMock from '../../resources/mocks/individual/binary/BinaryIndividualMock';

// test suites import
import baseIndividualTestSuite from '../../resources/suites/individual/base/BaseIndividualTestSuite';
import mutableIndividualTestSuite from '../../resources/suites/individual/base/MutableIndividualTestSuite';
import binaryIndividualTestSuite from '../../resources/suites/individual/binary/BinaryIndividualTestSuite';

const creation = (initializationParams: BinaryIndividualMock) => {
  return new BinaryIndividual(initializationParams.creation.representation);
};

Object.keys(BinaryIndividualMocks).forEach(key => {
  const test = BinaryIndividualMocks[key];
  describe(`Tests for individual ${test.creation.representation}`, () => {
    baseIndividualTestSuite(test, creation);
    mutableIndividualTestSuite(test, creation);
    binaryIndividualTestSuite(test);
  });
});
