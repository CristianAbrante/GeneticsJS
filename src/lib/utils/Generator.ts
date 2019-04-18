/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { Engine, real } from 'random-js';

export function generateProbability(engine: Engine) {
  return real(0.0, 1.0, true)(engine);
}
