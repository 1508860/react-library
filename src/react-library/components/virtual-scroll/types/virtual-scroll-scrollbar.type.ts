import type { PropsWithChildren, ReactElement } from "react";

import type { CallbackWithParameter } from "@react-library/common";

/**
 * Virtual scroll item child callback
 */
export type VirtualScrollScrollbar = CallbackWithParameter<VirtualScrollScrollbarProps, VirtualScrollScrollbarResult>;

/**
 * Virtual scroll item child result
 */
export type VirtualScrollScrollbarResult = ReactElement;

/**
 * Virtual scroll item child props
 */
export type VirtualScrollScrollbarProps = PropsWithChildren;
