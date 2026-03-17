import type { ReactElement } from "react";

import type { Callback } from "@react-library/common";

/**
 * Virtual scroll item child callback
 */
export type VirtualScrollItemChild = Callback<VirtualScrollItemChildResult>;

/**
 * Virtual scroll item child result
 */
export type VirtualScrollItemChildResult = ReactElement;
