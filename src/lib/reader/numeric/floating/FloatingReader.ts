/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { FloatingIndividual } from '../../../individual/numeric/floating/';
import { IndividualToken } from '../../base/';
import { NumericReader } from '../base/';

class FloatingReader extends NumericReader<FloatingIndividual> {
  public readonly tokenDefinition: Array<IndividualToken<number>> = [
    {
      token: /^[+-]?\d+(?:(?:\.\d+)?(?:[Ee][+-]?\d+)?)?$/,
      value: (token: string) => Number.parseFloat(token),
    },
    {
      token: /^[+-]?\.\d+(?:[Ee][+-]?\d+)?$/,
      value: (token: string) => Number.parseFloat(token),
    },
  ];

  public read(definition: string): FloatingIndividual {
    const genotype = this.getGenotype(this.tokenize(definition));
    return new FloatingIndividual(genotype);
  }
}

export default FloatingReader;
