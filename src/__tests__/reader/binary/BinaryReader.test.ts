/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import Genetics from '../../../index';
import DataTests from './BinaryReaderData';
const { BinaryReader } = Genetics.reader;

describe('binary reader test', () => {
  const reader = new BinaryReader();
  DataTests.forEach(dataTest => {
    test(`Individual ${dataTest.expected.toString()} test`, () => {
      const individual = reader.read(dataTest.definition);
      expect(individual.genotype).toEqual(dataTest.expected.genotype);
    });
  });
});
