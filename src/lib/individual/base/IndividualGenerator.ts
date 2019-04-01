/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import Individual from './Individual';

export interface IndividualGeneratorParams {
  size: number;
}

export interface IndividualGenerator<I extends Individual<T>, T> {
  generate(param: IndividualGeneratorParams): I;
}

export default IndividualGenerator;
