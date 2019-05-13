/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { Generator } from '../../../generator/utils';
import { NumericRange } from '../../../individual/numeric/base';
import { FloatingIndividual } from '../../../individual/numeric/floating';
import BaseCrossover from '../../base/BaseCrossover';
import { CrossoverParams, IndividualConstructor } from '../../base/Crossover';

export interface BaseFloatingCrossoverParams extends CrossoverParams<FloatingIndividual, number> {
  alpha: number;
}

abstract class BaseFloatingCrossover extends BaseCrossover<FloatingIndividual, number, BaseFloatingCrossoverParams> {
  private recombinationPoint: number = 0;
  public cross(
    firstParent: FloatingIndividual,
    secondParent: FloatingIndividual,
    alpha = 0.5,
    engine = Generator.DEFAULT_ENGINE,
  ): FloatingIndividual[] {
    return this.crossWith(firstParent, secondParent, { engine, alpha, individualConstructor: FloatingIndividual });
  }

  public crossWith(
    firstParent: FloatingIndividual,
    secondParent: FloatingIndividual,
    params: BaseFloatingCrossoverParams,
  ): FloatingIndividual[] {
    this.generateRecombinationPoint(firstParent.length(), params);
    this.checkParams(params);
    return super.crossWith(firstParent, secondParent, params);
  }

  protected getGenotypeValues(
    firstParent: FloatingIndividual,
    secondParent: FloatingIndividual,
    params: BaseFloatingCrossoverParams,
    index: number,
  ): { first: number; second: number } {
    const recombinationCondition = this.getRecombinationCondition(index);
    const firstValue = firstParent.get(index);
    const secondValue = secondParent.get(index);
    return {
      first: recombinationCondition ? firstValue : this.getRecombinationValue(firstValue, secondValue, params),
      second: recombinationCondition ? secondValue : this.getRecombinationValue(secondValue, firstValue, params),
    };
  }

  protected abstract getRecombinationCondition(index: number): boolean;

  protected getRecombinationValue(
    firstParentValue: number,
    secondParentValue: number,
    params: BaseFloatingCrossoverParams,
  ): number {
    const { alpha } = params;
    return alpha * firstParentValue + (1.0 - alpha) * secondParentValue;
  }

  private checkParams(params: BaseFloatingCrossoverParams) {
    if (!Generator.probabilityIsValid(params.alpha)) {
      throw new Error(`BaseFloatingCrossover: alpha of ${params.alpha} is not in range [0.0, 1.0]`);
    }
  }

  private generateRecombinationPoint(parentsLength: number, params: BaseFloatingCrossoverParams) {
    this.recombinationPoint = Generator.generateInteger(new NumericRange(0, parentsLength - 1), params.engine);
  }
}
