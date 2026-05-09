import type { ReactElement } from "react";

import type { CallbackWithParameter } from "@react-library/common";

/**
 * Virtual scroll item child callback
 */
export type VirtualScrollItemChild<TChildProps extends VirtualScrollItemChildProps> = CallbackWithParameter<TChildProps, VirtualScrollItemChildResult>;

/**
 * Virtual scroll item child result
 */
export type VirtualScrollItemChildResult = ReactElement;

/**
 * Virtual scroll item child props
 */
export type VirtualScrollItemChildProps = object;
