/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import FitnessFunction from '../fitness/FitnessFunction';
import GeneratorParams from '../generator/base/GeneratorParams';
import IndividualGenerator from '../generator/base/IndividualGenerator';
import BaseIndividual from '../individual/base/BaseIndividual';

export interface PopulationItem<I extends BaseIndividual<T>, T> {
  individual: I;
  fitness: number;
  age: number;
}

export interface PopulationStatistics {
  averageAge: number;
  averageFitness: number;
  fitnessSum: number;
  fittestIndividualIndex: number;
}

class Population<I extends BaseIndividual<T>, T> {
  public static readonly DEFAULT_FITNESS = 0.0;
  public static readonly DEFAULT_FITTEST_IND_INDEX = -1;

  public populationStatistics: PopulationStatistics = {
    averageAge: 0,
    averageFitness: 0,
    fitnessSum: 0,
    fittestIndividualIndex: -1,
  };

  private items: Array<PopulationItem<I, T>> = [];

  public generatePopulationWithOperations<Params extends GeneratorParams>(
    populationSize: number,
    generator: IndividualGenerator<I, Params, T>,
    generatorParams: Params,
    fitnessFunction: FitnessFunction<I, T>,
  ) {
    this.items = [];
    for (let i = 0; i < populationSize; i++) {
      const individual = generator.generateWith(generatorParams);
      const fitness = fitnessFunction(individual);
      this.pushIndividual(individual, fitness);
    }
  }

  public getPopulationSize() {
    return this.items.length;
  }

  public replacePopulation(populationItems: Array<PopulationItem<I, T>>) {
    this.items = populationItems;
    this.setStatistics();
  }

  public pushIndividual(individual: I, fitness?: number, age?: number) {
    const previousAgeSum = this.populationStatistics.averageAge * this.getPopulationSize();
    this.items.push({
      age: age ? age : 0,
      fitness: fitness ? fitness : Population.DEFAULT_FITNESS,
      individual,
    });

    const lastItem = this.items[this.items.length - 1];
    this.populationStatistics.averageAge = (previousAgeSum + lastItem.age) / this.getPopulationSize();
    this.populationStatistics.fitnessSum += lastItem.fitness;
    this.populationStatistics.averageFitness = this.populationStatistics.fitnessSum / this.getPopulationSize();
    const fittest = this.getFittestIndividualItem();
    if (fittest === undefined) {
      this.populationStatistics.fittestIndividualIndex = this.items.length - 1;
    } else {
      if (fittest.fitness < lastItem.fitness) {
        this.populationStatistics.fittestIndividualIndex = this.items.length - 1;
      }
    }
  }

  public getFittestIndividualItem(): PopulationItem<I, T> | undefined {
    const index = this.populationStatistics.fittestIndividualIndex;
    return index === Population.DEFAULT_FITTEST_IND_INDEX ? undefined : this.getPopulationItem(index);
  }

  public getPopulationItem(index: number) {
    return this.items[index];
  }

  public getPopulationItems() {
    return this.items;
  }

  private setStatistics() {
    this.populationStatistics = {
      averageAge: 0,
      averageFitness: 0,
      fitnessSum: 0,
      fittestIndividualIndex: Population.DEFAULT_FITTEST_IND_INDEX,
    };
    this.items.forEach((item, index) => {
      this.populationStatistics.averageAge += item.age;
      this.populationStatistics.fitnessSum += item.fitness;
      const fittest = this.getFittestIndividualItem();
      if (fittest === undefined) {
        this.populationStatistics.fittestIndividualIndex = index;
      } else {
        if (fittest.fitness < item.fitness) {
          this.populationStatistics.fittestIndividualIndex = index;
        }
      }
    });
    this.populationStatistics.averageAge /= this.getPopulationSize();
    this.populationStatistics.averageFitness = this.populationStatistics.fitnessSum / this.getPopulationSize();
  }
}

export default Population;
