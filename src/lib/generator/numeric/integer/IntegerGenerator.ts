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

class IntegerGenerator extends NumericGenerator<IntegerIndividual> {
  private static normalizeRange(range: NumericRange): NumericRange {
    const randomJSMax = 2 ** 53;
    const randomJSMin = -randomJSMax;
    return {
      highest: range.highest === NumericIndividual.DEFAULT_RANGE.highest ? randomJSMax : range.highest,
      lowest: range.lowest === NumericIndividual.DEFAULT_RANGE.lowest ? randomJSMin : range.lowest,
    };
  }

  public generateGene(params: NumericParams): number {
    const normalizedRange = IntegerGenerator.normalizeRange(params.range);
    return integer(normalizedRange.lowest, normalizedRange.highest)(params.engine);
  }

  public construct(genotype: number[], range: NumericRange): IntegerIndividual {
    return new IntegerIndividual(genotype, range);
  }
}

export default IntegerGenerator;
