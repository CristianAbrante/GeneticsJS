/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { bool, Engine, integer, MersenneTwister19937, real } from 'random-js';
import { NumericIndividual, NumericRange } from '../../individual/numeric/base';

export const defaultEngine = MersenneTwister19937.autoSeed();

export function generateProbability(engine: Engine) {
  return real(0.0, 1.0, true)(engine);
}

export function generateIntegerInRange(range: NumericRange, engine: Engine = defaultEngine) {
  return integer(range.lowest, range.highest)(engine);
}

export function generateFloatingInRange(range: NumericRange, engine: Engine = defaultEngine) {
  return real(range.lowest, range.highest, true)(engine);
}

class Generator {
  public static DEFAULT_ENGINE = MersenneTwister19937.autoSeed();

  public static isProbabilityValid(probability: number) {
    return probability >= 0.0 && probability <= 1.0;
  }

  public static checkProbability(probability: number) {
    if (!this.isProbabilityValid(probability)) {
      throw new RangeError(`Error: Probability ${probability} is not in range [0.0 - 1.0]`);
    }
  }

  public static generateProbability(engine = Generator.DEFAULT_ENGINE) {
    return real(0.0, 1.0, true)(engine);
  }

  public static generateBoolean(chance = 0.5, engine = Generator.DEFAULT_ENGINE) {
    return bool(chance)(engine);
  }

  public static generateInteger(range = NumericIndividual.DEFAULT_RANGE, engine = Generator.DEFAULT_ENGINE) {
    return integer(range.lowest, range.highest)(engine);
  }
}

export default Generator;
