/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { CrossoverParams } from '../crossover/base';
import Crossover from '../crossover/base/Crossover';
import FitnessFunction from '../fitness/FitnessFunction';
import { GeneratorParams, IndividualGenerator } from '../generator/base';
import { Generator } from '../generator/utils';
import BaseIndividual from '../individual/base/BaseIndividual';
import { NumericRange } from '../individual/numeric/base';
import Mutation, { MutationParams } from '../mutation/base/Mutation';
import Population from '../population/Population';
import IndividualsSelection, { IndividualsSelectionParams } from '../selection/base/IndividualsSelection';
import PopulationReplacement, { PopulationReplacementParams } from '../selection/replacement/PopulationReplacement';
import TerminationCondition from '../termination/TerminationCondition';

export interface EvolutionaryAlgorithmParams<
  I extends BaseIndividual<T>,
  T,
  GParams extends GeneratorParams,
  SParams extends IndividualsSelectionParams,
  XParams extends CrossoverParams<I, T>,
  MParams extends MutationParams
> {
  populationSize: number;
  generator: IndividualGenerator<I, GParams, T>;
  generatorParams: GParams;
  selection: IndividualsSelection<I, T, SParams>;
  selectionParams: SParams;
  crossover: Crossover<I, T, XParams>;
  crossoverParams: XParams;
  mutation: Mutation<I, T, MParams>;
  mutationParams: MParams;
  fitnessFunction: FitnessFunction<I, T>;
  replacement: PopulationReplacement<I, T>;
  replacementParams: PopulationReplacementParams;
  terminationCondition: TerminationCondition<I, T>;
}

class EvolutionaryAlgorithm<
  I extends BaseIndividual<T>,
  T,
  GParams extends GeneratorParams,
  SParams extends IndividualsSelectionParams,
  XParams extends CrossoverParams<I, T>,
  MParams extends MutationParams
> {
  public population: Population<I, T>;
  public generations = 0;

  private params: EvolutionaryAlgorithmParams<I, T, GParams, SParams, XParams, MParams>;

  constructor(params: EvolutionaryAlgorithmParams<I, T, GParams, SParams, XParams, MParams>) {
    this.params = params;
    this.population = new Population<I, T>();
    this.population.generatePopulationWithOperations(
      this.params.populationSize,
      this.params.generator,
      this.params.generatorParams,
      this.params.fitnessFunction,
    );
  }

  public run() {
    while (!this.params.terminationCondition.isSatisfied(this.population, this.generations)) {
      this.runGeneration();
    }
  }

  public nextGeneration() {
    if (!this.params.terminationCondition.isSatisfied(this.population, this.generations)) {
      this.runGeneration();
    }
  }

  private runGeneration() {
    const selectionResult = this.params.selection.selectWith(this.population, this.params.selectionParams);
    const offspring = new Population<I, T>();
    const range = new NumericRange(0, selectionResult.length - 1);
    while (offspring.getPopulationSize() < this.params.populationSize) {
      const firstIndividual = selectionResult[Generator.generateInteger(range)];
      const secondIndividual = selectionResult[Generator.generateInteger(range)];
      const xResult = this.params.crossover.crossWith(firstIndividual, secondIndividual, this.params.crossoverParams);
      this.params.mutation.mutateWith(xResult[0], this.params.mutationParams);
      this.params.mutation.mutateWith(xResult[1], this.params.mutationParams);
      offspring.pushIndividual(xResult[0], this.params.fitnessFunction(xResult[0]), 0);
      offspring.pushIndividual(xResult[1], this.params.fitnessFunction(xResult[1]), 0);
    }
    this.population.replacePopulation(
      this.params.replacement.replace(this.population, offspring, this.params.replacementParams).getPopulationItems(),
    );
    this.generations += 1;
  }
}

export default EvolutionaryAlgorithm;
