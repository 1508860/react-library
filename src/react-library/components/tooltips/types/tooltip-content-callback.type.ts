import type { CallbackWithParameter } from "@react-library/common";

import type { TooltipContent } from "./tooltip-content.type";

/**
 * Describes tooltip content callback for context provider
 */
export type TooltipContentCallback = CallbackWithParameter<TooltipContent, void>;
