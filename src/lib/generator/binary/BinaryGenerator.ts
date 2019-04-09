/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { bool, Engine, MersenneTwister19937 } from 'random-js';
import { BaseGenerator, GeneratorParams } from '../base';
import { BinaryIndividual } from './../../individual/binary';

export interface BinaryGeneratorParams extends GeneratorParams {
  chance: number;
}

class BinaryGenerator extends BaseGenerator<BinaryIndividual, BinaryGeneratorParams, boolean> {
  protected static chanceIsInRange(chance: number): boolean {
    return chance >= 0.0 && chance <= 1.0;
  }

  protected static checkChance(chance: number) {
    if (!this.chanceIsInRange(chance)) {
      throw new RangeError(`BinaryGenerator: chance ${chance} is not in range [0.0 - 1.0]`);
    }
  }

  public generate(
    length: number,
    chance: number = 0.5,
    engine: Engine = MersenneTwister19937.autoSeed(),
  ): BinaryIndividual {
    const params = { chance, engine, length };
    return this.generateWith(params);
  }

  public generateGene(params: BinaryGeneratorParams): boolean {
    return bool(params.chance)(params.engine);
  }

  public generateWith(params: BinaryGeneratorParams): BinaryIndividual {
    BinaryGenerator.checkChance(params.chance);
    return super.generateWith(params);
  }

  public construct(genotype: boolean[]): BinaryIndividual {
    return new BinaryIndividual(genotype);
  }
}

export default BinaryGenerator;
