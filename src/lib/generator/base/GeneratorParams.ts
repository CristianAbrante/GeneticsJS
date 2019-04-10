/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { Engine } from 'random-js';

/**
 * ## GeneratorParams
 * Interface that defines the params
 * of the individual generator.
 */
interface GeneratorParams {
  /**
   * The engine used to generate
   * random values. It used the
   * engines of `random-js` module.
   */
  engine: Engine;

  /**
   * Length that the generated individual
   * is going to have.
   */
  length: number;
}

export default GeneratorParams;
