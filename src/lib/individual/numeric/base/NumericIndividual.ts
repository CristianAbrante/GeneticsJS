/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import Individual from './../../base/Individual';

export interface NumericRange<T> {
  firstElement: T;
  lastElement: T;
}

abstract class NumericIndividual<T extends number|boolean> extends Individual<T> {
  protected constructor(genotype: T[], private _range: NumericRange<T>) {
    super(genotype);
  };

  public valueIsInRange(value: T): boolean {
    if (typeof value === 'boolean') {
      return true;
    } else {
      return value >= this.range.firstElement && value <= this.range.lastElement;
    }
  }

  get range(): NumericRange<T> {
    return this._range;
  }

  set range(range: NumericRange<T>) {
    if (range.firstElement < range.lastElement) {
      this._range = range;
    } else {
      throw new Error('range is not valid, first element must be lower than last');
    }
  }
}

export default NumericIndividual;