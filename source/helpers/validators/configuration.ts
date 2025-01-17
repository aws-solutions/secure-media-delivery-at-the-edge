// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import * as Joi from 'joi';
import { apiSchema, IApi } from './api';
import { coreSchema, IMain } from './main';
import { hostingSchema, IHosting } from './hosting';


import { sessionRevocationSchema, ISessionRevocation } from './auto_session_revocation';

/**
 * Describes a configuration associated with the
 * current stack in Typescript.
 */
 export interface IConfiguration {

  main: IMain;
  sessionRevocation?: ISessionRevocation;
  api?: IApi;
  hls?: IHosting;
  dash?: IHosting;
  solutionId?: string;
  solutionVersion?: string;
  solutionName?: string;
  solutionDisplayName?: string;
}

/**
 * The `Joi` schema for validating the configuration.
 */
export const schema = Joi.object().keys({
  main: coreSchema.required(),
  sessionRevocation: sessionRevocationSchema.optional(),
  api: apiSchema.optional(),
  hosting: hostingSchema.optional(),

}).unknown().required();

