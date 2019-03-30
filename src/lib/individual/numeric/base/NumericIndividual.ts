/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { MutableIndividual } from './../../base/';

export interface NumericRange {
  lowest: number;
  highest: number;
}

abstract class NumericIndividual extends MutableIndividual<number> {
  protected constructor(genotype: number[], private _range: NumericRange) {
    super(genotype);
  }

  public geneIsInRange(gene: number): boolean {
    return gene >= this.range.lowest && gene <= this.range.highest;
  }

  get range(): NumericRange {
    return this._range;
  }

  set range(range: NumericRange) {
    if (range.lowest < range.highest) {
      this._range = range;
    } else {
      throw new Error('range is not valid, first element must be lower than last');
    }
  }
}

export default NumericIndividual;
