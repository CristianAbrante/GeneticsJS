/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { Generator } from '../../generator/utils';
import { BaseIndividual } from '../../individual/base';
import { NumericRange } from '../../individual/numeric/base';
import BaseCrossover from './BaseCrossover';
import { CrossoverParams, IndividualConstructor } from './Crossover';

export interface NPointsCrossoverParams<I extends BaseIndividual<T>, T> extends CrossoverParams<I, T> {
  numberOfCrossoverPoints: number;
}

class NPointsCrossover<I extends BaseIndividual<T>, T> extends BaseCrossover<I, T, NPointsCrossoverParams<I, T>> {
  private crossoverPointsRange: NumericRange = NumericRange.DEFAULT;
  private crossoverPoints: number[] = [];
  private crossoverPointIndex = 0;

  public cross(
    firstParent: I,
    secondParent: I,
    numberOfCrossoverPoints: number,
    individualConstructor: IndividualConstructor<I, T>,
    engine = Generator.DEFAULT_ENGINE,
  ): I[] {
    return this.crossWith(firstParent, secondParent, {
      engine,
      individualConstructor,
      numberOfCrossoverPoints,
    });
  }

  public crossWith(firstParent: I, secondParent: I, params: NPointsCrossoverParams<I, T>): I[] {
    const parentsLength = firstParent.length();
    this.setCrossoverPointsRange(parentsLength);
    this.checkCrossoverParams(params);
    this.generateCrossoverPoints(params);
    this.crossoverPointIndex = 0;
    return super.crossWith(firstParent, secondParent, params);
  }

  protected getGenotypeValues(
    firstParent: I,
    secondParent: I,
    params: NPointsCrossoverParams<I, T>,
    index: number,
  ): { first: T; second: T } {
    const crossPoint = this.crossoverPoints[this.crossoverPointIndex];
    if (index >= crossPoint && this.crossoverPointIndex < this.crossoverPoints.length) {
      this.crossoverPointIndex += 1;
    }
    const parentSelectionCondition: boolean = this.crossoverPointIndex % 2 === 0;
    return {
      first: parentSelectionCondition ? firstParent.get(index) : secondParent.get(index),
      second: parentSelectionCondition ? secondParent.get(index) : firstParent.get(index),
    };
  }

  private setCrossoverPointsRange(parentsLength: number) {
    this.crossoverPointsRange = new NumericRange(0, parentsLength - 1);
  }

  private checkCrossoverParams(params: NPointsCrossoverParams<I, T>) {
    if (!NumericRange.isValueInRange(params.numberOfCrossoverPoints, this.crossoverPointsRange)) {
      throw new Error(
        `NPointsCrossover: number of crossover points must be in range [${this.crossoverPointsRange.lowest}, ${
          this.crossoverPointsRange.highest
        }]`,
      );
    }
  }

  private generateCrossoverPoints(params: NPointsCrossoverParams<I, T>) {
    this.crossoverPoints = [];
    while (this.crossoverPoints.length !== params.numberOfCrossoverPoints) {
      const point = Generator.generateInteger(this.crossoverPointsRange, params.engine);
      if (!this.crossoverPoints.includes(point)) {
        this.crossoverPoints.push(point);
      }
    }
    this.crossoverPoints.sort();
  }
}

export default NPointsCrossover;
