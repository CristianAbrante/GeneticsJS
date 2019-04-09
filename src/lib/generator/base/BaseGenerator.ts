/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { BaseIndividual } from './../../individual/base';
import GeneratorParams from './GeneratorParams';
import IndividualGenerator from './IndividualGenerator';

abstract class BaseIndividualGenerator<I extends BaseIndividual<T>, Params extends GeneratorParams, T>
  implements IndividualGenerator<I, Params, T> {
  protected static lengthIsInRange(length: number): boolean {
    return length >= 0;
  }

  protected static checkLength(length: number) {
    if (!this.lengthIsInRange(length)) {
      throw new RangeError(`BaseIndividualGenerator: length ${length} is not valid.`);
    }
  }

  public generateGenotype(params: Params): T[] {
    return Array.from(new Array(params.length), () => this.generateGene(params));
  }

  public generateWith(params: Params): I {
    BaseIndividualGenerator.checkLength(params.length);
    return this.construct(this.generateGenotype(params));
  }

  public abstract construct(genotype: T[], ...args: any[]): I;

  public abstract generate(...args: any[]): I;

  public abstract generateGene(params: Params): T;
}

export default BaseIndividualGenerator;
