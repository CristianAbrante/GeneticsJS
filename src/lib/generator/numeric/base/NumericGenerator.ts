/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { NumericIndividual, NumericRange } from '../../../individual/numeric/base';
import { Generator } from '../../utils';
import { BaseGenerator, GeneratorParams } from './../../base/';

/**
 * ## NumericParams
 * Params of the [[Numeric Generator]].
 */
export interface NumericParams extends GeneratorParams {
  /**
   * Range of the individuals that
   * are going to be generated.
   */
  range: NumericRange;
}

/**
 * ## NumericGenerator
 * Generator of [[NumericIndividuals]]
 */
abstract class NumericGenerator<I extends NumericIndividual> extends BaseGenerator<I, NumericParams, number> {
  /**
   * Generates a [[NumericIndividual]]
   * with the specified params.
   * @param length of the individual that is going to be generated.
   * @param range of the individual that is going to be generated.
   * @param engine (of `random-js`) that is going to be used.
   * @return [[NumericIndividual]] with the generated genotype.
   * @throws RangeError if `length` is not greater than `0`.
   * @throws Error if `range` is not valid.
   */
  public generate(length: number, range: NumericRange = NumericRange.DEFAULT, engine = Generator.DEFAULT_ENGINE): I {
    const params = { length, range, engine };
    return this.generateWith(params);
  }

  /**
   * Generates a [[NumericIndividual]] with
   * the specified params.
   * @param params of the generator.
   * @return [[NumericIndividual]] with the generated genotype.
   * @throws RangeError if `length` is not greater than `0`.
   * @throws Error if `range` is not valid.
   */
  public generateWith(params: NumericParams): I {
    return super.generateWith(params);
  }
}

export default NumericGenerator;
