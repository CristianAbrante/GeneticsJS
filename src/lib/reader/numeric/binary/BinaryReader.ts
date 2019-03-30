/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { IndividualToken } from '../../base/IndividualReader';
import Numeric from '../base/';
import BinaryIndividual from './BinaryIndividual';

class BinaryReader extends Numeric.Reader<BinaryIndividual, boolean> {
  public readonly tokenDefinition: Array<IndividualToken<boolean>> = [
    {
      token: /[0f]/i,
      value: () => false,
    },
    {
      token: /[1t]/i,
      value: () => true,
    },
  ];

  public read(definition: string): BinaryIndividual {
    const genotype = this.getGenotype(this.tokenize(definition));
    return new BinaryIndividual(genotype);
  }

  public tokenize(definition: string): string[] {
    return definition.split(/\s*/).filter(Boolean);
  }
}

export default BinaryReader;
