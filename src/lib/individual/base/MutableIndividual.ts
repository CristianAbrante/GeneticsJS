/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { BaseIndividual, Mutable } from './index';

/**
 * ## Mutable Individual
 * Provides a basic implementation of the mutable interface.
 * Also extends BaseIndividual class.
 */
abstract class MutableIndividual<T> extends BaseIndividual<T> implements Mutable<MutableIndividual<T>, T> {
  /**
   * Copy other individual into the current.
   * Creates a shallow copy, with the references
   * only.
   * @param other individual to copy
   */
  public copy(other: MutableIndividual<T>): void {
    this.setGenotype(other.genotype);
  }

  /**
   * Abstract method for creating a deep
   * copy of the other individual
   * in the current.
   * @param other individual to copy.
   */
  public abstract deepCopy(other: MutableIndividual<T>): void;

  /**
   * Transfers a copy of a section of the genotype
   * between different parts of it.
   * @param target position where to start the copy.
   * @param start position of the desired section. By default is `0`.
   * @param end position of the desired section,
   *        by default is the length of the individual.
   */
  public copyWithin(target: number, start: number = 0, end: number = this.length()) {
    this.setGenotype(this.genotype.copyWithin(target, start, end));
  }

  /**
   * Fill the genotype with the specified gene.
   * @param gene we want to fill the genotype with.
   * @param start position of the fill, by default is `0`.
   * @param end position of the fill, by default is
   *        the length of the genotype.
   */
  public fill(gene: T, start: number = 0, end: number = this.length()) {
    this.setGenotype(this.genotype.fill(gene, start, end));
  }

  /**
   * Creates a new genotype with the result of
   * the execution of the specified callback for each
   * element.
   * @param callback called for each gene.
   */
  public map(callback: (gene: T, geneIndex?: number, genotype?: T[]) => T) {
    this.setGenotype(this.genotype.map(callback));
  }

  /**
   * Reverses the genotype.
   */
  public reverse() {
    this.setGenotype(this.genotype.reverse());
  }

  /**
   * Sets the gene at specified index to
   * the specified value.
   * @param geneIndex index of the gene to be set.
   * @param gene new value of the gene.
   * @throws RangeError if index is not in range [0-length)
   */
  public set(geneIndex: number, gene: T): void {
    this.checkIndexRange(geneIndex);
    this.genotype[geneIndex] = gene;
  }
}

export default MutableIndividual;
