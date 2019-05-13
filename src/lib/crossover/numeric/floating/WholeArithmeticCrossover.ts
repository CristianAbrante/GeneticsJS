/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import BaseFloatingCrossover from './BaseFloatingCrossover';

export { BaseFloatingCrossoverParams as WholeArithmeticCrossoverParams } from './BaseFloatingCrossover';

class WholeArithmeticCrossover extends BaseFloatingCrossover {
  protected getRecombinationCondition(index: number): boolean {
    return false;
  }
}

export default WholeArithmeticCrossover;
