/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { integer } from 'random-js';
import { NumericRange } from '../../../individual/numeric/base';
import { NumericParams } from '../base/NumericGenerator';
import { NumericIndividual } from './../../../individual/numeric/base';
import { IntegerIndividual } from './../../../individual/numeric/integer';
import { NumericGenerator } from './../base';

/**
 * ## IntegerGenerator
 * Generates an [[IntegerIndividual]].
 */
class IntegerGenerator extends NumericGenerator<IntegerIndividual> {
  /**
   * This method is used due to an issue with
   * `random-js`. It does not accept `Number.Infinity` as
   *  the lowest or highest number, instead it expects
   *  `2 ** 53` as it maximum or `-2 ** 53` as its minimum.
   *  So the range must be normalized.
   * @param range that we want to normalize.
   * @return normalized range.
   */
  private static normalizeRange(range: NumericRange): NumericRange {
    const randomJSMax = 2 ** 53;
    const randomJSMin = -randomJSMax;
    return {
      highest: range.highest === NumericIndividual.DEFAULT_RANGE.highest ? randomJSMax : range.highest,
      lowest: range.lowest === NumericIndividual.DEFAULT_RANGE.lowest ? randomJSMin : range.lowest,
    };
  }

  /**
   * Generates a gene with the specified
   * params.
   * @param params of the generator.
   * @return the generated gene.
   */
  public generateGene(params: NumericParams): number {
    const normalizedRange = IntegerGenerator.normalizeRange(params.range);
    return integer(normalizedRange.lowest, normalizedRange.highest)(params.engine);
  }

  /**
   * Constructs the individual given
   * the genotype and the range.
   * @param genotype of the individual.
   * @param params of the generator.
   * @return [[NumericIndividual]] constructed with the given params.
   */
  public construct(genotype: number[], params: NumericParams): IntegerIndividual {
    return new IntegerIndividual(genotype, params.range);
  }
}

export default IntegerGenerator;
