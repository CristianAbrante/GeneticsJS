/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { real } from 'random-js';
import { NumericRange } from '../../../individual/numeric/base';
import { NumericParams } from '../base/NumericGenerator';
import { FloatingIndividual } from './../../../individual/numeric/floating';
import { NumericGenerator } from './../base';

class FloatingGenerator extends NumericGenerator<FloatingIndividual> {
  public generateGene(params: NumericParams): number {
    return real(params.range.lowest, params.range.highest, true)(params.engine);
  }

  public construct(genotype: number[], range: NumericRange): FloatingIndividual {
    return new FloatingIndividual(genotype, range);
  }
}

export default FloatingGenerator;
