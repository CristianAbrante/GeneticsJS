/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import BaseIndividual from '../../individual/base/BaseIndividual';
import Population, { PopulationItem } from '../../population/Population';
import PopulationReplacement, { PopulationReplacementParams } from './PopulationReplacement';
const util = require('util');

abstract class BaseReplacement<I extends BaseIndividual<T>, T> implements PopulationReplacement<I, T> {
  public replace(
    oldPopulation: Population<I, T>,
    newPopulation: Population<I, T>,
    params: PopulationReplacementParams,
  ): Population<I, T> {
    const returnPopulation = new Population<I, T>();
    oldPopulation
      .getPopulationItems()
      .concat(newPopulation.getPopulationItems())
      .sort(this.sortMethod)
      .slice(0, params.selectionCount)
      .forEach(item => {
        returnPopulation.pushIndividual(item.individual, item.fitness, item.age + 1);
      });
    return returnPopulation;
  }

  public pushIndividual(population: Population<I, T>, item: PopulationItem<I, T>): void {
    population.pushIndividual(item.individual, item.fitness, item.age + 1);
  }

  public abstract sortMethod(a: PopulationItem<I, T>, b: PopulationItem<I, T>): number;
}

export default BaseReplacement;
