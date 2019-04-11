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

/**
 * ## Floating generator
 * Generates a [[FloatingIndividual]].
 */
class FloatingGenerator extends NumericGenerator<FloatingIndividual> {
  /**
   * Generates a gene with the specified
   * params.
   * @param params of the generator.
   * @return the generated gene.
   */
  public generateGene(params: NumericParams): number {
    return real(params.range.lowest, params.range.highest, true)(params.engine);
  }

  /**
   * Construct the [[FloatingIndividual]] with
   * the specified genotype and range.
   * @param genotype of the generated individual.
   * @param params of the generator.
   * @return Constructed [[FloatingIndividual]] from genotype.
   */
  public construct(genotype: number[], params: NumericParams): FloatingIndividual {
    return new FloatingIndividual(genotype, params.range);
  }
}

export default FloatingGenerator;
