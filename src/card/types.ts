/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import type { ReactNode } from 'react';
import type { OverrideT } from '../helpers/overrides';

export type CardComponentsT = {
  Action?: OverrideT;
  Body?: OverrideT;
  Contents?: OverrideT;
  HeaderImage?: OverrideT;
  Root?: OverrideT;
  Thumbnail?: OverrideT;
  Title?: OverrideT;
};

export type ImagePropsT = {
  alt?: string;
  complete?: boolean;
  crossOrigin?: string;
  currentSrc?: string;
  height?: number;
  decode?: Promise<void>;
  isMap?: boolean;
  naturalHeight?: number;
  naturalWidth?: number;
  sizes?: string;
  src?: string;
  srcSet?: string;
  useMap?: string;
  width?: number;
};

export type CardsPropsT = {
  /** Contents to be rendered at the bottom of the Card. Used to organize UI which enables user action. */
  readonly action?: ReactNode;
  /** Content to be rendered within the Card body. */
  readonly children?: ReactNode;
  /** Function that takes Card props and returns a boolean that represents if a thumbnail will be rendered. */
  readonly hasThumbnail: (a: { readonly thumbnail?: string }) => boolean;
  /** Image to be positioned at the top of the Card. Can be a string representing the img src or an object with img attrs */
  readonly headerImage?: string | ImagePropsT;
  readonly overrides: CardComponentsT;
  /** Image src that by default is rendered to the side of children content. */
  readonly thumbnail?: string;
  /** Content to render above the body content. */
  readonly title?: ReactNode;
};
