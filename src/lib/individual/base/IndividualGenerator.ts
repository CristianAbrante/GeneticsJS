/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved. 
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import Individual from './individual';

export interface IndividualGeneratorParams<T> {
  size: number,
  range?: T[]
}

export interface IndividualGenerator<T> {
  generate(param: IndividualGeneratorParams<T>): Individual<T>;
}