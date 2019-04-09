/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import paramsList from '../../test-data/generator/BinaryGeneratorData';
import Genetics from './../../../index';
const { BinaryGenerator } = Genetics.generator;

describe('binary generator tests', () => {
  const generator = new BinaryGenerator();
  paramsList.forEach(params => {
    test('creation with params length', () => {
      const ind = generator.generateWith(params);
      expect(ind.length()).toEqual(params.length);
    });

    test('creation length', () => {
      const ind = generator.generate(params.length);
      expect(ind.length()).toEqual(params.length);
    });

    test('creation length and chance', () => {
      const ind = generator.generate(params.length, params.chance);
      expect(ind.length()).toEqual(params.length);
    });

    test('creation length, chance and engine', () => {
      const ind = generator.generate(params.length, params.chance);
      expect(ind.length()).toEqual(params.length);
    });

    test('chance throws error', () => {
      expect(() => generator.generate(params.length, -0.3)).toThrow(RangeError);
      expect(() => generator.generate(params.length, 1.001)).toThrow(RangeError);
    });

    test('length throws error', () => {
      expect(() => generator.generate(Number.POSITIVE_INFINITY)).toThrow(RangeError);
      expect(() => generator.generate(Number.NEGATIVE_INFINITY)).toThrow(RangeError);
      expect(() => generator.generate(-1)).toThrow(RangeError);
    });

    test('0.0 chance test', () => {
      expect(generator.generate(params.length, 0.0).every(gene => gene === false)).toBeTruthy();
    });

    test('1.0 chance test', () => {
      expect(generator.generate(params.length, 1.0).every(gene => gene === true)).toBeTruthy();
    });
  });
});
