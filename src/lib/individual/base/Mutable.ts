/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { BaseIndividual } from './index';

/**
 * ## Mutable
 * Mutable interface provides with some common methods
 * for accessing and modify gene values of individuals
 * which implements it.
 * @typeparam I individual which extends from BaseIndividual.
 * @typeparam T datatype of this individual.
 */
interface Mutable<I extends BaseIndividual<T>, T> {
  /**
   * Copy other individual into the current.
   * Creates a shallow copy, with the references
   * only.
   * @param other individual to copy
   */
  copy(other: I): void;

  /**
   * Creates a deep copy of the other individual
   * in the current.
   * @param other individual to copy.
   */
  deepCopy(other: I): void;

  /**
   * Transfers a copy of a section of the genotype
   * between different parts of it.
   * @param target position where to start the copy.
   * @param start position of the desired section.
   * @param end position of the desired section.
   */
  copyWithin(target: number, start: number, end: number): void;

  /**
   * Sets the gene at specified index to
   * the specified value.
   * @param geneIndex index of the gene to be set.
   * @param gene new value of the gene.
   */
  set(geneIndex: number, gene: T): void;

  /**
   * Fill the genotype with the specified gene.
   * @param gene we want to fill the genotype with.
   * @param start position.
   * @param end position.
   */
  fill(gene: T, start: number, end: number): void;

  /**
   * Creates a new genotype with the result of
   * the execution of the specified callback for each
   * element.
   * @param callback called for each gene.
   */
  map(callback: (gene: T, geneIndex?: number, genotype?: T[]) => T): void;

  /**
   * Reverses the genotype.
   */
  reverse(): void;
}

export default Mutable;
