/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { IntegerIndividual } from '../../../individual/numeric/integer/';
import { IndividualToken } from '../../base/';
import { NumericReader } from '../base/';

/**
 * ## Integer Reader
 * Reads an [[IntegerIndividual]] from a definition.
 * The format of the definition is the following
 * ```
 * 3 5 7 23   // OK
 * -4 -5 -8   // OK (Negative numbers allowed).
 * ```
 */
class IntegerReader extends NumericReader<IntegerIndividual> {
  public readonly tokenDefinition: Array<IndividualToken<number>> = [
    {
      token: /^[+-]?\d+$/,
      value: (token: string) => Number.parseInt(token, 10),
    },
  ];

  /**
   * Reads a definition and converts
   * into an [[IntegerIndividual]].
   * @param definition of the individual.
   * @return the read individual.
   * @throws Error if definition is not correct.
   */
  public read(definition: string): IntegerIndividual {
    const genotype = this.getGenotype(this.tokenize(definition));
    return new IntegerIndividual(genotype);
  }
}

export default IntegerReader;
