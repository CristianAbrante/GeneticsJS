/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { Generator } from '../../utils/';
import { NumericParams } from '../base/NumericGenerator';
import { IntegerIndividual } from './../../../individual/numeric/integer';
import { NumericGenerator } from './../base';

/**
 * ## IntegerGenerator
 * Generates an [[IntegerIndividual]].
 */
class IntegerGenerator extends NumericGenerator<IntegerIndividual> {
  /**
   * Generates a gene with the specified
   * params.
   * @param params of the generator.
   * @return the generated gene.
   */
  public generateGene(params: NumericParams): number {
    return Generator.generateInteger(params.range, params.engine);
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
