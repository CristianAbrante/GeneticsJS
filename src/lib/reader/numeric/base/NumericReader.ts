/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { NumericIndividual } from '../../../individual/numeric/base/';
import { BaseIndividualReader } from '../../base';

/**
 * ## Numeric Reader
 * Provides an implementation for a reader for
 * [[NumericIndividual]].
 * @typeparam I Type of the generated individual, which extends [[NumericIndividual]].
 */
abstract class NumericReader<I extends NumericIndividual> extends BaseIndividualReader<I, number> {
  /**
   * Tokenize a string into several
   * tokens. the tokens are separated by one
   * or more whitespace characters.
   * @param definition of the individual.
   * @return the tokenized string.
   */
  public tokenize(definition: string): string[] {
    return definition.split(/\s+/).filter(Boolean);
  }
}

export default NumericReader;
