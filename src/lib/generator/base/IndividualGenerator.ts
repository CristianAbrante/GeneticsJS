/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { BaseIndividual } from '../../individual/base/';
import GeneratorParams from './GeneratorParams';

/**
 * ## Individual generator
 * This interface represents a random generator
 * of individual. Describe the most common methods
 * used for generating initial solutions of the
 * search space defined by the individuals.
 * @typeparam I is the individual that is going to be generated, extends from `BaseIndividual`.
 * @typeparam Params are the params used for initialize the individual.
 * @typeparam T is the type of the individual that we are generating.
 */
interface IndividualGenerator<I extends BaseIndividual<T>, Params extends GeneratorParams, T> {
  /**
   * Construct the individual given a genotype
   * of the specified type and optional params.
   * @param genotype of the generated individual.
   * @param params of the generator
   */
  construct(genotype: T[], params: Params): I;

  /**
   * Generates the genotype given the params
   * of the generator.
   * @param params of the generator.
   */
  generateGenotype(params: Params): T[];

  /**
   * Generates a gene of the individual given
   * the params of the generator.
   * @param params of the generator.
   */
  generateGene(params: Params): T;

  /**
   * Method for giving a more *readable*
   * generation of the individual.
   * @param args args for the generator.
   */
  generate(...args: any[]): I;

  /**
   * Generates an individual given some
   * params.
   * @param params for the generator.
   */
  generateWith(params: Params): I;
}

export default IndividualGenerator;
