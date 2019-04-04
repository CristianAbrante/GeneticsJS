/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import Genetics from '../../../index';
import { data, error } from '../../test-data/FloatingReaderData';
const { FloatingReader } = Genetics.reader;

describe('Floating reader test', () => {
  const reader = new FloatingReader();

  describe('Read test', () => {
    data.forEach(dataTest => {
      test(`Individual ${dataTest.expected.toString()} test`, () => {
        const individual = reader.read(dataTest.definition);
        expect(individual.genotype).toEqual(dataTest.expected.genotype);
      });
    });
  });

  describe('Error test', () => {
    error.forEach(errorTest => {
      test(`Error in initialization ${errorTest}`, () => {
        expect(() => reader.read(errorTest)).toThrow(Error);
      });
    });
  });
});
