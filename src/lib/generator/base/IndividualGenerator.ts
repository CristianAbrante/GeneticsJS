/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { BaseIndividual } from '../../individual/base/';
import GeneratorParams from './GeneratorParams';

interface IndividualGenerator<I extends BaseIndividual<T>, Params extends GeneratorParams, T> {
  construct(genotype: T[], ...args: any[]): I;
  generateGenotype(params: Params): T[];
  generateGene(params: Params): T;
  generate(...args: any[]): I;
  generateWith(params: Params): I;
}

export default IndividualGenerator;
