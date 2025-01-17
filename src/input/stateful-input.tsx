/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import StatefulContainer from './stateful-container';
import Input from './input';
import type { InputPropsT, StatefulInputPropsT } from './types';

export default function StatefulInput(props: StatefulInputPropsT) {
  return (
    <StatefulContainer {...props}>
      {(childrenProps: InputPropsT) => <Input {...childrenProps} />}
    </StatefulContainer>
  );
}
