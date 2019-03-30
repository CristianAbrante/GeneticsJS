/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

/**
 * Type for callback that express a condition for each element.
 * @typeparam T type of individual genes.
 */
type geneConditionCallback<T> = (gene: T, geneIndex?: number, genotype?: T[]) => boolean;

/**
 * Type for callback executed for each element of the array.
 * @typeparam T type of individual genes.
 */
type geneEvaluationCallback<T> = (gene: T, geneIndex?: number, genotype?: T[]) => any;

/**
 * ## Individual
 * Base class for creating individuals which
 * are one of the fundamental blocks of evolutionary
 * algorithms.
 *
 * The fundamental part of the individual is the
 * genotype, which is the array that represents the
 * data of the individual. This genotype is composed
 * of genes.
 *
 * This abstract class provides some 'array-like'
 * methods for iterating over the genes and modify
 * or access its values.
 *
 * @typeparam T is the type of the individual.
 */
abstract class Individual<T> implements Iterable<T> {
  /**
   * Genotype array.
   */
  private genotypeArray: T[] = [];

  /**
   * Constructor of the class expects an
   * array for initializing the genotype.
   * @param genotype genotype array.
   */
  protected constructor(genotype?: T[]) {
    if (genotype !== null) {
      this.setGenotype(genotype as T[]);
    }
  }

  /**
   * getter for the genotype.
   * @return genotype array.
   */
  get genotype(): T[] {
    return this.genotypeArray;
  }

  /**
   * Individuals are iterable, so this method
   * returns an iterator.
   * @return iterator over the genotype array.
   */
  public [Symbol.iterator](): Iterator<T> {
    return this.genotype[Symbol.iterator]();
  }

  public copy(other: Individual<T>) {
    this.setGenotype(other.genotype);
  }

  /**
   * Returns the gene at specified index.
   * @param geneIndex index of the gene to be accessed.
   * @return gene at specified index.
   * @throws RangeError if index is not in range [0-length)
   */
  public get(geneIndex: number): T {
    this.checkIndexRange(geneIndex);
    return this.genotype[geneIndex];
  }

  /**
   * Returns the length of the genotype.
   * @return length of the genotype.
   */
  public length(): number {
    return this.genotype.length;
  }

  /**
   * Returns an object iterable iterator whose
   * contains the pairs `[key, value]` for each
   * element.
   * @return iterable iterator object.
   */
  public entries(): IterableIterator<[number, T]> {
    return this.genotype.entries();
  }

  /**
   * Returns a boolean, which is true if all genes
   * in the genotype accept the condition specified
   * in the callback function.
   * @param callback which specifies a condition for all genes.
   * @return `true` if al genes accept condition and `false` otherwise.
   */
  public every(callback: geneConditionCallback<T>): boolean {
    return this.genotype.every(callback);
  }

  /**
   * Returns the first element which accepts the condition
   * in the callback.
   * @param callback which specifies the condition.
   * @return first gene which accept the callback condition
   *         or `undefined` if none accepts it.
   */
  public find(callback: geneConditionCallback<T>): T | undefined {
    return this.genotype.find(callback);
  }

  /**
   * Returns the index of the first element which accepts
   * the condition in the callback.
   * @param callback which specifies the condition.
   * @return index of the first gene which accept the
   *         callback condition or `undefined` if none accepts it.
   */
  public findIndex(callback: geneConditionCallback<T>): number | undefined {
    return this.genotype.findIndex(callback);
  }

  /**
   * Executes the callback for each gene
   * of the genotype.
   * @param callback to be executed.
   * @returns `undefined`.
   */
  public forEach(callback: geneEvaluationCallback<T>): undefined {
    this.genotype.forEach(callback);
    return undefined;
  }

  /**
   * Tests if genotype contains specified gene.
   * @param gene to be searched.
   * @param startIndex index to start the search, by default is `0`.
   * @return `true` if gene in genotype or `false` otherwise.
   */
  public includes(gene: T, startIndex: number = 0): boolean {
    return this.genotype.includes(gene, startIndex);
  }

  /**
   * Returns the index of the first specified gene.
   * @param gene to be searched.
   * @param fromIndex index to start the search, by default is `0`.
   * @return index of the first specified gene or `-1` if not found.
   */
  public indexOf(gene: T, fromIndex: number = 0): number {
    return this.genotype.indexOf(gene, fromIndex);
  }

  /**
   * Returns an iterator which contains the indexes
   * of the genes.
   * @return iterable iterator of numbers.
   */
  public keys(): IterableIterator<number> {
    return this.genotype.keys();
  }

  /**
   * Last index of the specified gene in the genotype.
   * The genotype is visited in reverse order.
   * @param gene that we are searching.
   * @param fromIndex from which index to start,
   *        by default is the last index.
   */
  public lastIndexOf(gene: T, fromIndex: number = this.length() - 1): number {
    return this.genotype.lastIndexOf(gene, fromIndex);
  }

  /**
   * Test if some gene validates the condition
   * specified by the callback.
   * @param callback that specifies condition.
   * @return `true` if some gene validates condition or
   *         `false` otherwise.
   */
  public some(callback: geneConditionCallback<T>): boolean {
    return this.genotype.some(callback);
  }

  /**
   * Converts the individual to string.
   * @return string that represents individual.
   */
  public toString(): string {
    return this.genotype.toString();
  }

  /**
   * Returns an iterator that contains
   * each gene in the genotype.
   * @return iterable iterator that contains each gene.
   */
  public values(): IterableIterator<T> {
    return this.genotype.values();
  }

  /**
   * Sets the genotype to the specified genotype.
   * @param genotype new genotype.
   */
  protected setGenotype(genotype: T[]) {
    this.genotypeArray = genotype;
  }

  /**
   * Check if index is in range, if not
   * throws an exception.
   * @param index to be checked.
   * @throws RangeError if index is not in range `[0-length]`.
   */
  protected checkIndexRange(index: number) {
    if (!this.isInRange(index)) {
      throw new RangeError(`Range Error: Index ${index} is not in range [0 - ${this.length()})`);
    }
  }

  /**
   * Check if index is in range `[0-length]`.
   * @param index to be checked.
   * @return `true` if index is in range and `false` otherwise.
   */
  protected isInRange(index: number): boolean {
    return index >= 0 && index < this.length();
  }
}

export default Individual;
