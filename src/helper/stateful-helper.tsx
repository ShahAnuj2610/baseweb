/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import * as React from 'react';

import { StatefulContainer, ACCESSIBILITY_TYPE, PLACEMENT, TRIGGER_TYPE } from '../popover';
import { POPOVER_MARGIN } from '../popover/constants';

import { Helper } from './helper';
import type { StatefulPropsT } from './types';

export function StatefulHelper(props: StatefulPropsT) {
  const { children, ...restProps } = props;
  return (
    <StatefulContainer {...restProps}>
      {(helperProps) => <Helper {...helperProps}>{children}</Helper>}
    </StatefulContainer>
  );
}

StatefulHelper.defaultProps = {
  accessibilityType: ACCESSIBILITY_TYPE.menu,
  ignoreBoundary: false,
  overrides: {},
  onMouseEnterDelay: 200,
  onMouseLeaveDelay: 200,
  placement: PLACEMENT.bottom,
  showArrow: true,
  triggerType: TRIGGER_TYPE.click,
  dismissOnClickOutside: true,
  dismissOnEsc: true,
  stateReducer: (_, nextState) => nextState,
  popoverMargin: POPOVER_MARGIN,
};
