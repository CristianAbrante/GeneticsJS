/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import BaseIndividual from '../../individual/base/BaseIndividual';
import Population, { PopulationItem } from '../../population/Population';
import PopulationReplacement, { PopulationReplacementParams } from './PopulationReplacement';

abstract class BaseReplacement<I extends BaseIndividual<T>, T> implements PopulationReplacement<I, T> {
  public replace(
    oldPopulation: Population<I, T>,
    newPopulation: Population<I, T>,
    params: PopulationReplacementParams,
  ): Population<I, T> {
    const returnPopulation = new Population<I, T>();

    const oldSortedItems = oldPopulation.getPopulationItems().sort(this.sortMethod);
    const newSortedItems = newPopulation.getPopulationItems().sort(this.sortMethod);
    let firstIndex = 0;
    let secondIndex = 0;

    while (
      firstIndex < oldSortedItems.length &&
      secondIndex < newSortedItems.length &&
      returnPopulation.getPopulationSize() !== params.selectionCount
    ) {
      if (oldSortedItems[firstIndex] < newSortedItems[secondIndex]) {
        this.pushIndividual(returnPopulation, oldSortedItems[firstIndex]);
        firstIndex += 1;
      } else {
        this.pushIndividual(returnPopulation, newSortedItems[secondIndex]);
        secondIndex += 1;
      }
    }

    while (firstIndex < oldSortedItems.length && returnPopulation.getPopulationSize() !== params.selectionCount) {
      this.pushIndividual(returnPopulation, oldSortedItems[firstIndex]);
      firstIndex += 1;
    }
    while (secondIndex < newSortedItems.length && returnPopulation.getPopulationSize() !== params.selectionCount) {
      this.pushIndividual(returnPopulation, newSortedItems[secondIndex]);
      secondIndex += 1;
    }
    return returnPopulation;
  }

  public pushIndividual(population: Population<I, T>, item: PopulationItem<I, T>): void {
    population.pushIndividual(item.individual, item.fitness, item.age + 1);
  }

  public abstract sortMethod(a: PopulationItem<I, T>, b: PopulationItem<I, T>): number;
}

export default BaseReplacement;
