/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import NumericRange from '../../base/NumericRange';

class IntegerNormalizer {
  /**
   * Normalize the given gene, rounding it.
   * @param gene that we want to normalize.
   */
  public static normalize(gene: number) {
    return Math.round(gene);
  }

  /**
   * Normalizes a complete numeric genotype.
   * @param genotype that we want to normalize.
   */
  public static normalizeGenotype(genotype: number[]) {
    return genotype.map(gene => this.normalize(gene));
  }

  /**
   * Normalizes a given numeric range.
   * @param range that we want to normalize.
   * @return the normalized range.
   */
  public static normalizeRange(range: NumericRange): NumericRange {
    return new NumericRange(this.normalize(range.lowest), this.normalize(range.highest));
  }
}

export default IntegerNormalizer;
