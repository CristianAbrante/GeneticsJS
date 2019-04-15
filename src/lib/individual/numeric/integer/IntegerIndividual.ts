/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { NumericIndividual, NumericRange } from '../base';
import { IntegerReader } from './../../../reader/numeric/integer';

/**
 * ## Integer individual
 * Integer individual is a numeric individual
 * where all the genes in the genotype are integers.
 */
class IntegerIndividual extends NumericIndividual {
  /**
   * Normalize the given gene, rounding it.
   * @param gene that we want to normalize.
   */
  private static normalize(gene: number): number {
    return Math.round(gene);
  }

  /**
   * Normalizes a complete numeric genotype.
   * @param genotype that we want to normalize.
   */
  private static normalizeGenotype(genotype: number[]): number[] {
    return genotype.map(gene => this.normalize(gene));
  }

  /**
   * Normalizes a given numeric range.
   * @param range that we want to normalize.
   * @return the default range if it is `undefined`
   *         and a normalized range otherwise.
   */
  private static normalizeNumericRange(range?: NumericRange): NumericRange {
    if (range === undefined) {
      return IntegerIndividual.DEFAULT_RANGE;
    }
    return {
      highest: this.normalize(range.highest),
      lowest: this.normalize(range.lowest),
    };
  }

  /**
   * Constructor of the class.
   * Takes the representation as
   * an array of numbers or a string
   * and an optional range.
   * @param representation of the individual.
   * @param range of the individual, if not provided
   *        is the default range.
   */
  constructor(representation: number[] | string, range?: NumericRange) {
    if (typeof representation === 'string') {
      super([]);
      const reader = new IntegerReader();
      this.copy(reader.read(representation));
    } else {
      super(IntegerIndividual.normalizeGenotype(representation), IntegerIndividual.normalizeNumericRange(range));
    }
  }

  /**
   * Copy other individual into the current.
   * Creates a shallow copy, with the references
   * only.
   * @param other individual to copy
   */
  public copy(other: IntegerIndividual): void {
    this.setGenotype(other.genotype);
    this.setRange(other.range);
  }

  /**
   * Creates a deep copy of the other individual
   * in the current.
   * @param other individual to copy.
   */
  public deepCopy(other: IntegerIndividual): void {
    this.setGenotype(Array.from(other.genotype));
    this.setRange({
      highest: other.range.highest,
      lowest: other.range.lowest,
    });
  }

  /**
   * Fill the genotype with the specified gene.
   * @param gene we want to fill the genotype with.
   *        if it is not an integer it will be normalized.
   * @param start position.
   * @param end position.
   * @throws RangeError if gene is not in range.
   */
  public fill(gene: number, start: number = 0, end: number = this.length()) {
    super.fill(IntegerIndividual.normalize(gene), start, end);
  }

  /**
   * Creates a new genotype with the result of
   * the execution of the specified callback for each
   * element.
   * Result of the callback will be normalized to
   * an integer if it is not.
   * @param callback called for each gene.
   * @throws RangeError if callback result is not in range.
   */
  public map(callback: (gene: number, geneIndex?: number, genotype?: number[]) => number) {
    const normalizedCallback = (gene: number, geneIndex?: number, genotype?: number[]) => {
      return IntegerIndividual.normalize(callback(gene, geneIndex, genotype));
    };
    return super.map(normalizedCallback);
  }

  /**
   * Sets the gene at specified index to
   * the specified value.
   * @param geneIndex index of the gene to be set.
   *        if it is not an integer it will be normalized.
   * @param gene new value of the gene.
   * @throws RangeError if gene is not in range.
   */
  public set(geneIndex: number, gene: number): void {
    super.set(geneIndex, IntegerIndividual.normalize(gene));
  }
}

export default IntegerIndividual;
