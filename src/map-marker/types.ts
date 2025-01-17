/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import {
  FLOATING_MARKER_ANCHOR_POSITIONS,
  NEEDLE_SIZES,
  PINHEAD_SIZES_SHAPES,
  FLOATING_MARKER_SIZES,
  PINHEAD_TYPES,
  FLOATING_MARKER_ANCHOR_TYPES,
  BADGE_ENHANCER_SIZES,
  LABEL_ENHANCER_POSITIONS,
  KIND,
} from './constants';
import type { OverrideT } from '../helpers/overrides';

export type AnchorPositionsT =
  typeof FLOATING_MARKER_ANCHOR_POSITIONS[keyof typeof FLOATING_MARKER_ANCHOR_POSITIONS];

export type NeedleSizeT = typeof NEEDLE_SIZES[keyof typeof NEEDLE_SIZES];

export type PinHeadT = typeof PINHEAD_TYPES[keyof typeof PINHEAD_TYPES];

export type PinHeadSizeT = typeof PINHEAD_SIZES_SHAPES[keyof typeof PINHEAD_SIZES_SHAPES];

export type FloatingMarkerSizeT = typeof FLOATING_MARKER_SIZES[keyof typeof FLOATING_MARKER_SIZES];

/* eslint-disable flowtype/generic-spacing*/
export type FloatingMarkerAnchorTypeT =
  typeof FLOATING_MARKER_ANCHOR_TYPES[keyof typeof FLOATING_MARKER_ANCHOR_TYPES];

export type BadgeEnhancerSizeT = typeof BADGE_ENHANCER_SIZES[keyof typeof BADGE_ENHANCER_SIZES];

export type LabelEnhancerPositionT =
  typeof LABEL_ENHANCER_POSITIONS[keyof typeof LABEL_ENHANCER_POSITIONS];

export type KindT = typeof KIND[keyof typeof KIND];

export type FixedMarkerOverridesT = {
  Root?: OverrideT;
  InnerAnchor?: OverrideT;
  OuterAnchor?: OverrideT;
  PinHead?: OverrideT;
  PinHeadContent?: OverrideT;
  PinHeadContainer?: OverrideT;
  Needle?: OverrideT;
  DragShadow?: OverrideT;
  DragShadowContainer?: OverrideT;
  DragContainer?: OverrideT;
  BadgeEnhancer?: OverrideT;
  LabelEnhancer?: OverrideT;
  LabelEnhancerContainer?: OverrideT;
};

export type NeedlePropsT = {
  size: NeedleSizeT;
  background?: string;
  overrides: FixedMarkerOverridesT;
};

export type ItemPropsT = {
  children?: React.ReactNode;
  color?: string;
  size?: number;
};

export type LabelEnhancerT = {
  labelEnhancerContent?: string;
  labelEnhancerPosition?: LabelEnhancerPositionT;
};

export type LabelEhancerComponentT = {
  needleHeight: number;
  size: PinHeadSizeT;
  overrides?: FixedMarkerOverridesT;
} & LabelEnhancerT;

export type BadgeEnhancerT = {
  badgeEnhancerSize?: BadgeEnhancerSizeT | null;
  badgeEnhancerContent?: React.ComponentType<{
    size: number;
  }>;
};

export type BadgeEnhancerComponentT = {
  pinHeadSize: PinHeadSizeT;
  markerType: PinHeadT;
  overrides: FixedMarkerOverridesT;
} & BadgeEnhancerT;
export type BadgePositionT = {
  x: number;
  y: number;
};

export type FixedMarkerPropsT = {
  size?: PinHeadSizeT;
  needle?: NeedleSizeT;
  label?: string;
  startEnhancer?: React.ComponentType<{
    size: number;
  }>;
  endEnhancer?: React.ComponentType<{
    size: number;
  }>;
  kind?: KindT;
  dragging?: boolean;
  overrides?: FixedMarkerOverridesT;
} & BadgeEnhancerT &
  LabelEnhancerT;

export type FloatingMarkerOverridesT = {
  Root?: OverrideT;
  InnerAnchor?: OverrideT;
  OuterAnchor?: OverrideT;
  PinHead?: OverrideT;
  PinHeadContent?: OverrideT;
  PinHeadContainer?: OverrideT;
  AnchorContainer?: OverrideT;
  Needle?: OverrideT;
  DragShadow?: OverrideT;
  DragShadowContainer?: OverrideT;
  DragContainer?: OverrideT;
  BadgeEnhancer?: OverrideT;
  LabelEnhancer?: OverrideT;
  LabelEnhancerContainer?: OverrideT;
};

export type FloatingMarkerPropsT = {
  label?: string;
  anchor?: AnchorPositionsT;
  endEnhancer?: React.ComponentType<{
    size: number;
  }>;
  startEnhancer?: React.ComponentType<{
    size: number;
  }>;
  anchorType?: FloatingMarkerAnchorTypeT;
  size?: FloatingMarkerSizeT;
  overrides?: FloatingMarkerOverridesT;
};

export type PinHeadPropsT = {
  size?: PinHeadSizeT;
  label?: string;
  endEnhancer?: React.ComponentType<{
    size: number;
  }>;
  startEnhancer?: React.ComponentType<{
    size: number;
  }>;
  color: string;
  background: string;
  type?: PinHeadT;
  anchorType?: FloatingMarkerAnchorTypeT;
  needle?: NeedleSizeT;
  overrides?: FloatingMarkerOverridesT | FixedMarkerOverridesT;
} & BadgeEnhancerT &
  LabelEnhancerT;

export type DragShadowPropsT = {
  background: string;
  dragging: boolean;
  height: number;
  overrides: FixedMarkerOverridesT;
};
