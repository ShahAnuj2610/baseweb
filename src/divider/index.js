/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
import * as React from 'react';
import { withWrapper } from '../styles/index.js';

import { StyledDivider as StyledDividerElement } from './styled-components.js';

export * from './constants.js';

export const StyledDivider = withWrapper(
  StyledDividerElement,
  (StyledComponent) =>
    function StyledDivider(props) {
      return <StyledComponent aria-hidden="true" {...props} />;
    }
);
