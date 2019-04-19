/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

/**
 * ## Numeric Range
 * Represents a numeric range.
 */
class NumericRange {
  public static DEFAULT = new NumericRange();

  public static isArrayInRange(array: number[], range: NumericRange) {
    return array.every(value => this.isValueInRange(value, range));
  }

  public static isValueInRange(value: number, range: NumericRange) {
    return value >= range.lowest && value <= range.highest;
  }

  private static checkRangeValues(lowest: number, highest: number) {
    if (!this.rangeValuesAreValid(lowest, highest)) {
      throw new Error(`Error: range [${lowest}, ${highest}] is not a valid range.`);
    }
  }

  private static rangeValuesAreValid(lowest: number, highest: number) {
    return lowest < highest;
  }

  private _lowest: number = Number.NEGATIVE_INFINITY;
  private _highest: number = Number.POSITIVE_INFINITY;

  constructor(lowest: number = Number.NEGATIVE_INFINITY, highest: number = Number.POSITIVE_INFINITY) {
    this.set(lowest, highest);
  }

  get lowest(): number {
    return this._lowest;
  }

  set lowest(value: number) {
    this.set(value, this.highest);
  }

  get highest(): number {
    return this._highest;
  }

  set highest(value: number) {
    this.set(this.lowest, value);
  }

  public set(lowest: number, highest: number) {
    NumericRange.checkRangeValues(lowest, highest);
    this._lowest = lowest;
    this._highest = highest;
  }
}

export default NumericRange;
