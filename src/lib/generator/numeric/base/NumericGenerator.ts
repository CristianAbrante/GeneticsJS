/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { Engine, MersenneTwister19937 } from 'random-js';
import { NumericIndividual, NumericRange } from '../../../individual/numeric/base';
import { BaseGenerator, GeneratorParams } from './../../base/';

export interface NumericParams extends GeneratorParams {
  range: NumericRange;
}

abstract class NumericGenerator<I extends NumericIndividual> extends BaseGenerator<I, NumericParams, number> {
  public generate(
    length: number,
    range: NumericRange = NumericIndividual.DEFAULT_RANGE,
    engine: Engine = MersenneTwister19937.autoSeed(),
  ): I {
    const params = { length, range, engine };
    return this.generateWith(params);
  }

  public generateWith(params: NumericParams): I {
    return super.generateWith(params);
  }
}

export default NumericGenerator;
