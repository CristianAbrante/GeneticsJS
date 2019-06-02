/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import BaseIndividual from '../../individual/base/BaseIndividual';
import Population, { PopulationItem } from '../../population/Population';
import SelectionImplementation from '../implementation/SelectionImplementation';
import BaseSelection, { BaseSelectionParams } from './BaseSelection';

interface FitnessProportionalSelectionParams<I extends BaseIndividual<T>, T> extends BaseSelectionParams {
  subSelection: SelectionImplementation<I, T>;
}

class FitnessProportionalSelection<I extends BaseIndividual<T>, T> extends BaseSelection<I, T> {
  private cumulativeProbability: number[] = [];

  public selectWith(population: Population<I, T>, params: FitnessProportionalSelectionParams<I, T>): I[] {
    this.checkParams(population, params);
    this.cumulativeProbability = [];
    for (let i = 0; i < population.getPopulationSize(); i++) {
      const { fitness } = population.getPopulationItem(i);
      const normalizedFitness = fitness / population.populationStatistics.fitnessSum;
      const cumulativeProb = i === 0 ? normalizedFitness : this.cumulativeProbability[i - 1] + normalizedFitness;
      this.cumulativeProbability.push(cumulativeProb);
    }
    return params.subSelection.select(
      population,
      { engine: params.engine, selectionCount: params.selectionCount },
      this.getCumulativeProbability,
    );
  }

  private getCumulativeProbability = (item: PopulationItem<I, T>, index: number) => {
    return this.cumulativeProbability[index];
  };
}

export { FitnessProportionalSelectionParams };
export default FitnessProportionalSelection;
