/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import FloatingIndividualMock from '../../../resources/mocks/generator/numeric/floating/FloatingGeneratorMock';
import BaseGeneratorTestSuite from '../../../resources/suites/generator/base/BaseGeneratorTestSuite';
import NumericGeneratorTestSuite from '../../../resources/suites/generator/numeric/base/NumericGeneratorTestSuite';

import { IntegerGenerator } from '../../../../index';

const generationTimes = 100;

FloatingIndividualMock.forEach(testParams => {
  describe(`test suite with params - ${testParams.length} | [ ${testParams.range.lowest} - ${
    testParams.range.highest
  } ]`, () => {
    for (let i = 0; i < generationTimes; i++) {
      const generator = new IntegerGenerator();
      const ind = generator.generateWith(testParams);
      BaseGeneratorTestSuite(generator, ind, testParams);
      NumericGeneratorTestSuite(generator, ind, testParams);
    }
  });
});
