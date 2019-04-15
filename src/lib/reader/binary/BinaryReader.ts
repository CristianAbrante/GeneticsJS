/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { BinaryIndividual } from '../../individual/binary/';
import { BaseIndividualReader, IndividualToken } from '../base/';

/**
 * ## Binary reader
 * This class provides an implementation
 * of a reader which is able to read [[BinaryIndividual]]
 * the format of this individuals is the following:
 * ```
 * 001001001  // OK
 * tfftttfft  // OK
 * TFTFTTFFT  // OK
 * tfTTF0101  // OK (Mixed case)
 * 0  0 f 1T  // OK (mixed case with spaces)
 * ```
 */
class BinaryReader extends BaseIndividualReader<BinaryIndividual, boolean> {
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

  /**
   * Reads a definition and converts
   * into an individual.
   * @param definition of the individual.
   * @return the read individual.
   * @throws Error if there is an unexpected token.
   */
  public read(definition: string): BinaryIndividual {
    const genotype = this.getGenotype(this.tokenize(definition));
    return new BinaryIndividual(genotype);
  }

  /**
   * Tokenize a string into several
   * tokens. It separates the tokens
   * by whitespaces, tabulars and return
   * carriage.
   * @param definition of the individual.
   * @return the tokenized string.
   */
  public tokenize(definition: string): string[] {
    return definition.split(/\s*/).filter(Boolean);
  }
}

export default BinaryReader;
