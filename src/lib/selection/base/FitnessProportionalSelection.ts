/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import BaseIndividual from '../../individual/base/BaseIndividual';
import RouletteBasedSelection from '../roulette-based/RouletteBasedSelection';
import BaseSelection, { BaseSelectionIndividualData, BaseSelectionParams } from './BaseSelection';

interface FitnessProportionalSelectionIndividualData<I extends BaseIndividual<T>, T>
  extends BaseSelectionIndividualData<I, T> {
  fitness: number;
}

interface FitnessProportionalSelectionParams<I extends BaseIndividual<T>, T>
  extends BaseSelectionParams<I, T, FitnessProportionalSelectionIndividualData<I, T>> {
  fitnessSum: number;
  subSelection: RouletteBasedSelection<I, T>;
}

class FitnessProportionalSelection<I extends BaseIndividual<T>, T> extends BaseSelection<I, T> {
  public selectWith(params: FitnessProportionalSelectionParams<I, T>): I[] {
    const cumulativeProbability: number[] = [];
    params.individualsData.forEach((data, index) => {
      const fitness = params.individualsData[index].fitness / params.fitnessSum;
      if (index === 0) {
        cumulativeProbability.push(fitness);
      } else {
        cumulativeProbability.push(cumulativeProbability[index - 1] + fitness);
      }
    });
    return params.subSelection.selectWith({
      individualsData: params.individualsData.map((data, index) => ({
        cumulativeProbability: cumulativeProbability[index],
        individual: data.individual,
      })),
      ...params,
    });
  }
}

export default FitnessProportionalSelection;
