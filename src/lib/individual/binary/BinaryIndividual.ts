/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import BinaryReader from '../../reader/binary/BinaryReader';
import { MutableIndividual } from '../base/';

const reader = new BinaryReader();

/**
 * ## Binary individual
 * A binary individual has only boolean values
 * in its genotype. It could be represented by
 * a string of `0` and `1` or `t` and `f`.
 * ```
 * let ind = new BinaryIndividual('0010100');
 * console.log(ind.genotype) // [false, false, true, false, true, false, false]
 * console.log(ind) // 0 0 1 0 1 0 0
 * ```
 */
class BinaryIndividual extends MutableIndividual<boolean> {
  /**
   * Constructor of the class, expects an array
   * of boolean values or an string separated by
   * any number of spaces, with the following tokens:
   *
   * * (`0` | `f` | `F`) -> `false`
   * * (`1` | `t` | `T`) -> `true`
   *
   * Example:
   * ```
   *  01 0 10 01 // OK
   *    tf ff tf // OK
   *  T FTFFTF // OK
   *  0 1Ff tT // OK
   * ```
   * @param representation of the individual.
   */
  constructor(representation: string | boolean[]) {
    if (typeof representation === 'string') {
      super([]);
      this.copy(reader.read(representation));
    } else {
      super(representation as boolean[]);
    }
  }

  /**
   * Creates a deep copy of the
   * other individual in the current.
   * @param other individual to copy.
   */
  public deepCopy(other: MutableIndividual<boolean>): void {
    this.setGenotype(Array.from(other.genotype));
  }

  public flip(index: number) {
    this.set(index, !this.get(index));
  }

  /**
   * Converts a gene to string, useful for method
   * `toString`.
   * @param gene that we are converting.
   */
  protected geneToString(gene: boolean): string {
    return gene ? '1' : '0';
  }
}

export default BinaryIndividual;
