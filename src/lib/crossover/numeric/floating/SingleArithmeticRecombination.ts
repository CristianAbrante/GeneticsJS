/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { Generator } from '../../../generator/utils';
import { NumericRange } from '../../../individual/numeric/base';
import { FloatingIndividual } from '../../../individual/numeric/floating';
import BaseCrossover from '../../base/BaseCrossover';
import { CrossoverParams } from '../../base/Crossover';
import { SimpleArithmeticRecombinationParams } from './SimpleArithmeticRecombination';

export interface SingleArithmeticRecombinationParams extends CrossoverParams<FloatingIndividual, number> {
  alpha: number;
}

class SingleArithmeticRecombination extends BaseCrossover<
  FloatingIndividual,
  number,
  SingleArithmeticRecombinationParams
> {
  private recombinationPoint: number = 0;

  public cross(
    firstParent: FloatingIndividual,
    secondParent: FloatingIndividual,
    ...args: any[]
  ): FloatingIndividual[] {
    return [];
  }

  public crossWith(
    firstParent: FloatingIndividual,
    secondParent: FloatingIndividual,
    params: SingleArithmeticRecombinationParams,
  ): FloatingIndividual[] {
    this.generateRecombinationPoint(firstParent.length(), params);
    return super.crossWith(firstParent, secondParent, params);
  }

  protected getGenotypeValues(
    firstParent: FloatingIndividual,
    secondParent: FloatingIndividual,
    params: SingleArithmeticRecombinationParams,
    index: number,
  ): { first: number; second: number } {
    const parentSelectionCondition = index === this.recombinationPoint;
    const firstValue = firstParent.get(index);
    const secondValue = secondParent.get(index);
    return {
      first: parentSelectionCondition ? firstValue : this.getRecombinedValues(secondValue, firstValue, params),
      second: parentSelectionCondition ? secondValue : this.getRecombinedValues(firstValue, secondValue, params),
    };
  }

  private getRecombinedValues(firstValue: number, secondValue: number, params: SimpleArithmeticRecombinationParams) {
    return params.alpha * firstValue + (1.0 - params.alpha) * secondValue;
  }

  private generateRecombinationPoint(parentsLength: number, params: SimpleArithmeticRecombinationParams) {
    this.recombinationPoint = Generator.generateInteger(new NumericRange(1, parentsLength - 1), params.engine);
  }
}
