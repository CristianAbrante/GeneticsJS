/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { BaseGenerator } from '../../../../../lib/generator/base';
import GeneratorParams from '../../../../../lib/generator/base/GeneratorParams';
import BaseIndividual from '../../../../../lib/individual/base/BaseIndividual';

const generatorTestSuite = <
  G extends BaseGenerator<I, Params, T>,
  I extends BaseIndividual<T>,
  Params extends GeneratorParams,
  T
>(
  generator: G,
  params: Params,
) => {
  describe('BaseGenerator tests', () => {
    test('length test with generateWith', () => {
      const ind = generator.generateWith(params);
      expect(ind.length()).toEqual(params.length);
    });
  });
};

export default generatorTestSuite;
