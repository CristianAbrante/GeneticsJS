/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { IntegerIndividual } from '../../../individual/numeric/integer/';
import { IndividualToken } from '../../base/';
import { NumericReader } from '../base/';

class IntegerReader extends NumericReader<IntegerIndividual> {
  public readonly tokenDefinition: Array<IndividualToken<number>> = [
    {
      token: /[+-]?\d+(?:[Ee][+]?\d+)?/,
      value: (token: string) => Number.parseInt(token, 10),
    },
  ];

  public read(definition: string): IntegerIndividual {
    const genotype = this.getGenotype(this.tokenize(definition));
    return new IntegerIndividual(genotype);
  }
}

export default IntegerReader;
