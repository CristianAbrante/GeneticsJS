/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import Genetics from '../../index';
const { BinaryReader, FloatingReader, IntegerReader } = Genetics.reader;
import BinaryData from '../test-data/BinaryReaderData';
import FloatingData from '../test-data/FloatingReaderData';

const tests = [
  {
    definitions: BinaryData.data,
    error: BinaryData.error,
    name: 'binary',
    reader: new BinaryReader(),
  },
  {
    definitions: FloatingData.data,
    error: FloatingData.error,
    name: 'floating',
    reader: new FloatingReader(),
  },
];

describe('Reader Tests', () => {
  tests.forEach(testSuite => {
    describe('read test', () => {
      testSuite.definitions.forEach((testData: any) => {
        test(`Test with definition ${testData.definition}`, () => {
          const individual = testSuite.reader.read(testData.definition);
          expect(individual.genotype).toEqual(testData.expected.genotype);
        });
      });
    });
    describe('error test', () => {
      testSuite.error.forEach((errorData: string) => {
        test(`Test with definition ${errorData}`, () => {
          expect(() => testSuite.reader.read(errorData)).toThrow(Error);
        });
      });
    });
  });
});
