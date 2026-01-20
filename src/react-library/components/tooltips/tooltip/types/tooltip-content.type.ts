import type { ReactNode } from "react";

import type { IContent } from "@react-library/common";

/**
 * Describes the content allowed inside the tooltip overlay
 */
export type TooltipContent<TContent extends ReactNode> = IContent<() => TContent>;
