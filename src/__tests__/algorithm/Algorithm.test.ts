/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import EvolutionaryAlgorithm, { EvolutionaryAlgorithmParams } from '../../lib/algorithms/EvolutionaryAlgorithm';
import { OnePointCrossoverParams } from '../../lib/crossover/base';
import OnePointCrossover from '../../lib/crossover/base/OnePointCrossover';
import BinaryGenerator, { BinaryGeneratorParams } from '../../lib/generator/binary/BinaryGenerator';
import { Generator } from '../../lib/generator/utils';
import BinaryIndividual from '../../lib/individual/binary/BinaryIndividual';
import BitwiseMutation, { BitwiseMutationParams } from '../../lib/mutation/binary/BitwiseMutation';
import FitnessProportionalSelection, {
  FitnessProportionalSelectionParams,
} from '../../lib/selection/base/FitnessProportionalSelection';
import RouletteWheel from '../../lib/selection/implementation/RouletteWheel';
import FitnessBased from '../../lib/selection/replacement/FitnessBased';
import MaxGenerations from '../../lib/termination/MaxGenerations';

const fitness = (individual: BinaryIndividual) => {
  let count = 0;
  individual.forEach(gene => {
    if (gene) {
      count++;
    }
  });
  return count;
};

const params: EvolutionaryAlgorithmParams<
  BinaryIndividual,
  boolean,
  BinaryGeneratorParams,
  FitnessProportionalSelectionParams<BinaryIndividual, boolean>,
  OnePointCrossoverParams<BinaryIndividual, boolean>,
  BitwiseMutationParams
> = {
  populationSize: 5,
  generator: new BinaryGenerator(),
  generatorParams: {
    chance: 0.2,
    engine: Generator.DEFAULT_ENGINE,
    length: 7,
  },
  selection: new FitnessProportionalSelection(),
  selectionParams: {
    selectionCount: 5,
    engine: Generator.DEFAULT_ENGINE,
    subSelection: new RouletteWheel(),
  },
  crossover: new OnePointCrossover<BinaryIndividual, boolean>(),
  crossoverParams: {
    individualConstructor: BinaryIndividual,
    engine: Generator.DEFAULT_ENGINE,
  },
  mutation: new BitwiseMutation(),
  mutationParams: {
    engine: Generator.DEFAULT_ENGINE,
    mutationRate: 0.2,
  },
  fitnessFunction: fitness,
  replacement: new FitnessBased(),
  replacementParams: {
    selectionCount: 5,
  },
  terminationCondition: new MaxGenerations(10),
};

const ea = new EvolutionaryAlgorithm<
  BinaryIndividual,
  boolean,
  BinaryGeneratorParams,
  FitnessProportionalSelectionParams<BinaryIndividual, boolean>,
  OnePointCrossoverParams<BinaryIndividual, boolean>,
  BitwiseMutationParams
>(params);

const termination = () => true;

ea.run();
