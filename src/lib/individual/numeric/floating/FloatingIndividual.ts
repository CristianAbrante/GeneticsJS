/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { FloatingReader } from '../../../reader/numeric/floating';
import { NumericIndividual, NumericRange } from '../base';

/**
 * ## Floating Individual
 * Floating individual is an individual which
 * contains an array of floating point numbers.
 * The representation could be a string with
 * the numbers or the array of numbers.
 */
class FloatingIndividual extends NumericIndividual {
  /**
   * Constructor of the class.
   * It takes a representation and a range as
   * parameters.
   *
   * Representation could be a string or an
   * array of numbers. If representation is
   * a `string`, it takes the default range as
   * parameter. if it is a number[]` it takes the
   * specified range.
   * @param representation
   * @param range of the individual. Only if representation
   *        is a `number[]`.
   * @throws Error if range is not valid.
   * @throws RangeError if representation is a `number[]` and
   *          is not in range specified by the range parameter.
   * @throws Error if representation is an `string` with an
   *          wrong format.
   */
  constructor(representation: number[] | string, range?: NumericRange) {
    if (typeof representation === 'string') {
      super([]);
      const reader = new FloatingReader();
      this.copy(reader.read(representation));
    } else {
      super(representation, range);
    }
  }
}

export default FloatingIndividual;
