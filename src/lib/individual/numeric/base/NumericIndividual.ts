/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { MutableIndividual } from './../../base/';

/**
 * Numeric range interface
 * represents the limits of
 * a range.
 */
export interface NumericRange {
  readonly lowest: number;
  readonly highest: number;
}

/**
 * ## Numeric individual
 * Numeric individual represents an individual
 * with a numeric genotype, situated in a range.
 */
abstract class NumericIndividual extends MutableIndividual<number> {
  /**
   * Default range of the numeric individual,
   * it is a range between the numeric
   * representation limits.
   */
  public static DEFAULT_RANGE: NumericRange = {
    highest: Number.POSITIVE_INFINITY,
    lowest: Number.NEGATIVE_INFINITY,
  };

  public static isAValidRange(range: NumericRange): boolean {
    return range.lowest < range.highest;
  }

  /**
   * range of the individual.
   */
  private _range: NumericRange = NumericIndividual.DEFAULT_RANGE;

  /**
   * Constructor of the class.
   * Creates an individual given a numeric
   * genotype.
   * @param genotype of the individual.
   * @param range of the individual, if not provided
   *        or undefined it is set to default range.
   */
  protected constructor(genotype: number[], range?: NumericRange) {
    super(genotype);
    if (range === undefined) {
      this.setRange(NumericIndividual.DEFAULT_RANGE);
    } else {
      this.setRange(range);
    }
  }

  /**
   * Setter of the range.
   * @return the range of the individual.
   */
  get range(): NumericRange {
    return this._range;
  }

  /**
   * Copy other individual into the current.
   * Creates a shallow copy, with the references
   * only.
   * @param other individual to copy
   */
  public copy(other: NumericIndividual): void {
    super.copy(other);
    this.setRange(other.range);
  }

  /**
   * Creates a deep copy of the other individual
   * in the current.
   * @param other individual to copy.
   */
  public deepCopy(other: NumericIndividual): void {
    this.setGenotype(Array.from(other.genotype));
    this.setRange({
      highest: other.range.highest,
      lowest: other.range.lowest,
    });
  }

  /**
   * Sets the gene at specified index to
   * the specified value.
   * @param geneIndex index of the gene to be set.
   * @param gene new value of the gene.
   * @throws RangeError if gene is not in range.
   */
  public set(geneIndex: number, gene: number): void {
    this.checkGeneRange(gene);
    super.set(geneIndex, gene);
  }

  /**
   * Fill the genotype with the specified gene.
   * @param gene we want to fill the genotype with.
   * @param start position. By default is `0`.
   * @param end position. By default is the length of
   *        the individual.
   * @throws RangeError if gene is not in range.
   */
  public fill(gene: number, start: number = 0, end: number = this.length()) {
    this.checkGeneRange(gene);
    super.fill(gene, start, end);
  }

  /**
   * Creates a new genotype with the result of
   * the execution of the specified callback for each
   * element.
   * @param callback called for each gene.
   * @throws RangeError if callback result is not in range.
   */
  public map(callback: (gene: number, geneIndex?: number, genotype?: number[]) => number) {
    const inRangeCallback = (gene: number, geneIndex?: number, genotype?: number[]) => {
      const result = callback(gene, geneIndex, genotype);
      this.checkGeneRange(result);
      return result;
    };
    super.map(inRangeCallback);
  }

  /**
   * Sets the individual range.
   *
   * @param range that we want to set,
   *        if it is `undefined` it is set with
   *        the default range.
   * @throws Error if range is invalid.
   * @throws RangeError if any gene of the genotype
   *          is not in range.
   */
  protected setRange(range: NumericRange) {
    this.checkRange(range);
    this._range = range;
    this.checkGenotype(this.genotype);
  }

  /**
   * Method test if a range is valid.
   * @param range to be checked.
   * @throws Error if range is not valid.
   */
  protected checkRange(range: NumericRange) {
    if (!NumericIndividual.isAValidRange(range)) {
      throw new Error(`Error: Range [${range.lowest} - ${range.highest}] is not valid.`);
    }
  }

  /**
   * Checks if gene is in range.
   * @param gene that we want to check.
   * @throws RangeError if gene is not in range.
   */
  protected checkGeneRange(gene: number) {
    if (!this.geneIsInRange(gene)) {
      throw new RangeError(`Range error: gene value ${gene} is not in range`);
    }
  }

  /**
   * Checks if gene is in range.
   * @param gene that we want to check.
   * @return `true` if gene is in range and
   *          `false` otherwise.
   */
  protected geneIsInRange(gene: number): boolean {
    return gene >= this.range.lowest && gene <= this.range.highest;
  }

  /**
   * Checks if all genes in genotype
   * are in range. If it is not in
   * range it throws a RangeError.
   * @param genotype to be checked.
   */
  protected checkGenotype(genotype: number[]) {
    if (!this.genotypeIsInRange(genotype)) {
      throw new RangeError(`RangeError: genotype is not in range.`);
    }
  }

  /**
   * Checks if all genes in genotype
   * are in range
   * @param genotype to be checked.
   * @return `true` if all genes are in
   *          range and `false` otherwise.
   */
  protected genotypeIsInRange(genotype: number[]): boolean {
    return genotype.every(gene => this.geneIsInRange(gene));
  }

  /**
   * Converts a gene to string, useful for method
   * `toString`.
   * @param gene that we are converting.
   */
  protected geneToString(gene: number): string {
    return gene.toString();
  }
}

export default NumericIndividual;
