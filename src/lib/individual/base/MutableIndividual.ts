/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { BaseIndividual, Mutable } from './index';

abstract class MutableIndividual<T> extends BaseIndividual<T> implements Mutable<MutableIndividual<T>, T> {
  public copy(other: MutableIndividual<T>): void {
    this.setGenotype(other.genotype);
  }

  public abstract deepCopy(other: MutableIndividual<T>): void;

  public copyWithin(target: number, start: number = 0, end: number = this.length()): MutableIndividual<T> {
    this.setGenotype(this.genotype.copyWithin(target, start, end));
    return this;
  }

  /*
   * Fills the genotype with the specified gene.
   * @param gene this value is going to fill the array.
   * @param start start index, by default is `0`.
   * @param end end index, by default is the length of the genotype.
   * @return the genotype.
   */
  public fill(gene: T, start: number, end: number): MutableIndividual<T> {
    this.setGenotype(this.genotype.fill(gene, start, end));
    return this;
  }

  /**
   * Creates a new genotype with the result of
   * the execution of the specified callback for each
   * element.
   * @param callback which is going to be executed.
   * @return the new genotype.
   */
  public map(callback: (gene: T, geneIndex?: number, genotype?: T[]) => T): MutableIndividual<T> {
    this.setGenotype(this.genotype.map(callback));
    return this;
  }

  /**
   * Reverses the genotype.
   * @return the new genotype.
   */
  public reverse(): MutableIndividual<T> {
    this.setGenotype(this.genotype.reverse());
    return this;
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
