/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved. 
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import Individual from './individual';

export default interface IndividualReader<T> {
  read(definition: string): Individual<T>;
}