/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import BaseFloatingCrossover, { BaseFloatingCrossoverParams } from './BaseFloatingCrossover';

class WholeArithmeticCrossover extends BaseFloatingCrossover {
  protected getRecombinationCondition(index: number): boolean {
    return true;
  }
}

export { BaseFloatingCrossoverParams as WholeArithmeticCrossoverParams };
export default WholeArithmeticCrossover;
