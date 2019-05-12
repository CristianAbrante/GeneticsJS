/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import NPointsCrossover from '../../lib/crossover/base/NPointsCrossover';
import { MutableIndividual } from '../../lib/individual/base';
import BinaryIndividual from '../../lib/individual/binary/BinaryIndividual';

import { Generator } from '../../lib/generator/utils/';
jest.mock('../../lib/generator/utils/');

// test mocks import
import BinaryMock from '../resources/mocks/crossover/binary/NPointsCrossoverMockBinary';
import NPointsCrossoverMock from '../resources/mocks/crossover/NPointsCrossoverMock';

const nPointsTestSuite = <I extends MutableIndividual<T>, T>(
  mock: Array<NPointsCrossoverMock<I, T>>,
  message: string,
  cross: NPointsCrossover<I, T>,
) => {
  describe(message, () => {
    mock.forEach(mockTest => {
      test(`N points crossover with => ${mockTest.firstParent} x ${mockTest.secondParent}`, () => {
        const mockedGenerator = Generator as jest.Mocked<typeof Generator>;
        mockTest.crossoverPoints.forEach(point => {
          mockedGenerator.generateInteger.mockReturnValueOnce(point);
        });
        const result = cross.cross(
          mockTest.firstParent,
          mockTest.secondParent,
          mockTest.params.numberOfCrossoverPoints,
          mockTest.params.individualConstructor,
          mockTest.params.engine,
        );
        expect(result[0]).toEqual(mockTest.offspring[0]);
        expect(result[1]).toEqual(mockTest.offspring[1]);
      });
    });
  });
};

describe('N Points crossover tests', () => {
  nPointsTestSuite<BinaryIndividual, boolean>(
    BinaryMock,
    'Binary Individual',
    new NPointsCrossover<BinaryIndividual, boolean>(),
  );
});
