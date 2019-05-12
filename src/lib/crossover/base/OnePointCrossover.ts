/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { Generator } from '../../generator/utils';
import { BaseIndividual } from '../../individual/base';
import Crossover, { CrossoverParams, IndividualConstructor } from './Crossover';
import NPointsCrossover from './NPointsCrossover';

export interface OnePointCrossoverParams<I extends BaseIndividual<T>, T> extends CrossoverParams<I, T> {}

class OnePointCrossover<I extends BaseIndividual<T>, T> implements Crossover<I, T, OnePointCrossoverParams<I, T>> {
  public cross(
    firstParent: I,
    secondParent: I,
    individualConstructor: IndividualConstructor<I, T>,
    engine = Generator.DEFAULT_ENGINE,
  ): I[] {
    return this.crossWith(firstParent, secondParent, { individualConstructor, engine });
  }

  public crossWith(firstParent: I, secondParent: I, params: OnePointCrossoverParams<I, T>) {
    const cross = new NPointsCrossover<I, T>();
    return cross.crossWith(firstParent, secondParent, {
      engine: params.engine,
      individualConstructor: params.individualConstructor,
      numberOfCrossoverPoints: 1,
    });
  }
}

export default OnePointCrossover;
