/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

export const probabilityIsValid = (probability: number) => {
  return probability >= 0.0 && probability <= 1.0;
};

export const checkProbability = (probability: number) => {
  if (!probabilityIsValid(probability)) {
    throw new RangeError(`Probability ${probability} is not in range [0.0 - 1.0]`);
  }
};
