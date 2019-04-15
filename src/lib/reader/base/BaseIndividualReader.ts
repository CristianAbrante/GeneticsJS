/*
 * @license
 * Copyright (c) 2019 Cristian Abrante. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 */

import { BaseIndividual } from '../../individual/base/';
import IndividualReader, { IndividualToken } from './IndividualReader';

/**
 * ## Basic individual reader
 * This class provides the basic implementation
 * of the methods of the [[IndividualReader]]
 * interface.
 * @typeparam I is the type of the generated individual.
 * @typeparam T is the value of the genes of the individual.
 */
abstract class BaseIndividualReader<I extends BaseIndividual<T>, T> implements IndividualReader<I, T> {
  /**
   * Array of tokens of the individuals.
   */
  public abstract readonly tokenDefinition: Array<IndividualToken<T>>;

  /**
   * This method converts a token
   * into the value of the individual
   * genes.
   * @param token of the individual.
   * @return the value of the individual.
   * @throws Error if there is an unexpected token.
   */
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

  /**
   * given an array of tokens this
   * method converts into an array
   * of individual values.
   * @param tokens
   * @return the genotype or array of
   *          values
   */
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
