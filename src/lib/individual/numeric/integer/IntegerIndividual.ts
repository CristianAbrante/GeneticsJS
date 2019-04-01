/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { NumericIndividual, NumericRange } from '../base';

class IntegerIndividual extends NumericIndividual {
  public static DEFAULT_RANGE: NumericRange = {
    highest: Number.POSITIVE_INFINITY,
    lowest: Number.NEGATIVE_INFINITY,
  };

  private static normalize(gene: number): number {
    return Math.round(gene);
  }

  private static normalizeGenotype(genotype: number[]): number[] {
    return genotype.map(gene => this.normalize(gene));
  }

  private static normalizeNumericRange(range?: NumericRange): NumericRange {
    if (range === undefined) {
      return IntegerIndividual.DEFAULT_RANGE;
    }
    return {
      highest: this.normalize(range.highest),
      lowest: this.normalize(range.lowest),
    };
  }

  constructor(representation: number[], range?: NumericRange) {
    super(IntegerIndividual.normalizeGenotype(representation), IntegerIndividual.normalizeNumericRange(range));
  }

  public copy(other: IntegerIndividual): void {
    this.setGenotype(other.genotype);
    this.setRange(other.range);
  }

  public deepCopy(other: IntegerIndividual): void {
    this.setGenotype(Array.from(other.genotype));
    this.setRange({
      highest: other.range.highest,
      lowest: other.range.lowest,
    });
  }

  public fill(gene: number, start: number = 0, end: number = this.length()) {
    super.fill(IntegerIndividual.normalize(gene), start, end);
  }

  public map(callback: (gene: number, geneIndex?: number, genotype?: number[]) => number) {
    const normalizedCallback = (gene: number, geneIndex?: number, genotype?: number[]) => {
      return IntegerIndividual.normalize(callback(gene, geneIndex, genotype));
    };
    return super.map(normalizedCallback);
  }

  public set(geneIndex: number, gene: number): void {
    super.set(geneIndex, IntegerIndividual.normalize(gene));
  }
}

export default IntegerIndividual;
