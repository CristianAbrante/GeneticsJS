/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import NPointsCrossover from '../../lib/crossover/base/NPointsCrossover';
import BinaryIndividual from '../../lib/individual/binary/BinaryIndividual';

import { Generator } from '../../lib/generator/utils/';

jest.mock('../../lib/generator/utils/');

const mockedGenerator = Generator as jest.Mocked<typeof Generator>;

test('Generator fetch', () => {
  [1, 3].forEach(point => {
    mockedGenerator.generateInteger.mockReturnValueOnce(point);
  });

  const ind1 = new BinaryIndividual([true, false, false, false, true]);
  const ind2 = new BinaryIndividual([true, true, false, true, false]);
  const cross = new NPointsCrossover<BinaryIndividual, boolean>();

  const result = cross.cross(ind1, ind2, 2, BinaryIndividual);
  expect(result[0]).toEqual(new BinaryIndividual([true, true, false, false, true]));
  expect(result[1]).toEqual(new BinaryIndividual([true, false, false, true, false]));
});
