/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { bool, Engine, integer, MersenneTwister19937, real } from 'random-js';
import { NumericIndividual } from '../individual/numeric/base';

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

  public static generateProbability(engine: Engine = Generator.DEFAULT_ENGINE) {
    this.generateFloating({ lowest: 0.0, highest: 1.0 });
  }

  public static generateBoolean(chance = 0.5, engine: Engine = Generator.DEFAULT_ENGINE) {
    return bool(chance)(engine);
  }

  public static generateInteger(range = NumericIndividual.DEFAULT_RANGE, engine: Engine = Generator.DEFAULT_ENGINE) {
    return integer(range.lowest, range.highest)(engine);
  }

  public static generateFloating(range = NumericIndividual.DEFAULT_RANGE, engine: Engine = Generator.DEFAULT_ENGINE) {
    return real(range.lowest, range.highest, true)(engine);
  }
}

export default Generator;
