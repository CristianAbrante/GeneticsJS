/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import BaseIndividual from '../../../../lib/individual/base/BaseIndividual';
import BaseIndividualReader from '../../../../lib/reader/base/BaseIndividualReader';
import ReaderMock from '../../mocks/reader/ReaderMock';

const readerTestSuite = <R extends BaseIndividualReader<I, T>, I extends BaseIndividual<T>, T>(
  reader: R,
  mock: ReaderMock<I, T>,
) => {
  describe('Creation tests', () => {
    mock.creation.forEach(creationTest => {
      test(`Creation test with ${creationTest.representation}`, () => {
        const ind = reader.read(creationTest.representation);
        expect(ind.genotype).toEqual(creationTest.expected.genotype);
      });
    });
  });
  describe('Error tests', () => {
    mock.error.forEach(errorTest => {
      test(`Error tests with ${errorTest}`, () => {
        expect(() => reader.read(errorTest)).toThrow(Error);
      });
    });
  });
};

export default readerTestSuite;
