/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { BaseIndividual } from './../../individual/base';
import GeneratorParams from './GeneratorParams';
import IndividualGenerator from './IndividualGenerator';

/**
 * ## BaseIndividualGenerator
 * This class provides with the basic features of a
 * individual generator.
 */
abstract class BaseIndividualGenerator<I extends BaseIndividual<T>, Params extends GeneratorParams, T>
  implements IndividualGenerator<I, Params, T> {
  /**
   * Checks if a given individual length is in range.
   * @param length that is going to be evaluated.
   * @return `true` is length is greater than zero and `false`
   *          otherwise.
   */
  protected static lengthIsInRange(length: number): boolean {
    return length >= 0;
  }

  /**
   * Throws an exception if length is not in range.
   * @param length that is going to be checked.
   * @throws RangeError if length is not in range.
   */
  protected static checkLength(length: number) {
    if (!this.lengthIsInRange(length)) {
      throw new RangeError(`BaseIndividualGenerator: length ${length} is not valid.`);
    }
  }

  /**
   * Generates the genotype given the params
   * of the generator.
   * @param params of the generator.
   */
  public generateGenotype(params: Params): T[] {
    return Array.from(new Array(params.length), () => this.generateGene(params));
  }

  /**
   * Generates an individual given some
   * params.
   * @param params for the generator.
   * @throws RangeError if length of the params
   *          is not in range.
   */
  public generateWith(params: Params): I {
    BaseIndividualGenerator.checkLength(params.length);
    return this.construct(this.generateGenotype(params));
  }

  public abstract construct(genotype: T[], ...args: any[]): I;

  public abstract generate(...args: any[]): I;

  public abstract generateGene(params: Params): T;
}

export default BaseIndividualGenerator;
