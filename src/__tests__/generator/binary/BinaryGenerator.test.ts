/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import BinaryGeneratorMock from '../../resources/mocks/generator/binary/BinaryGeneratorMock';
import BaseGeneratorSuite from '../../resources/suites/generator/base/BaseGeneratorTestSuite';
import BinaryGeneratorSuite from '../../resources/suites/generator/binary/BinaryGeneratorTestSuite';

import Genetics from '../../../index';
const { BinaryGenerator } = Genetics.generator;

BinaryGeneratorMock.forEach(testParams => {
  describe(`Tests with params: ${testParams.length} - ${testParams.chance}`, () => {
    const generator = new BinaryGenerator();
    BaseGeneratorSuite(generator, testParams);
    BinaryGeneratorSuite(generator, testParams);
  });
});
