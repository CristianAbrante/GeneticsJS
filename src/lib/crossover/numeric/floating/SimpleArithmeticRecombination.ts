/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import BaseFloatingCrossover, { BaseFloatingCrossoverParams } from './BaseFloatingCrossover';

export interface SimpleArithmeticRecombinationParams extends BaseFloatingCrossoverParams {}

class SimpleArithmeticRecombination extends BaseFloatingCrossover {
  protected getRecombinationCondition(index: number): boolean {
    return index < this.recombinationPoint;
  }
}

export default SimpleArithmeticRecombination;
