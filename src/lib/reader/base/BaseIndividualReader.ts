/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import Individual from '../../individual/base/Individual';
import IndividualReader, { IndividualToken } from './IndividualReader';

abstract class BaseIndividualReader<I extends Individual<T>, T> implements IndividualReader<I, T> {
  public abstract readonly tokenDefinition: Array<IndividualToken<T>>;

  public convertToken(token: string): T {
    let convertedToken: T | null = null;
    this.tokenDefinition.forEach(tokenDefinition => {
      if (tokenDefinition.token.test(token)) {
        convertedToken = tokenDefinition.value(token);
      }
    });
    if (convertedToken !== null) {
      return convertedToken;
    } else {
      throw new Error(`Definition error: unexpected token ${token}`);
    }
  }

  public getGenotype(tokens: string[]): T[] {
    const individualValues: T[] = [];
    tokens.forEach(token => {
      individualValues.push(this.convertToken(token));
    });
    return individualValues;
  }

  public abstract read(definition: string): I;

  public abstract tokenize(definition: string): string[];
}

export default BaseIndividualReader;
