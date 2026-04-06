import type { CallbackWithParameter } from "@react-library/common";

import type { TooltipRichContent } from "./tooltip-rich-content.type";

/**
 * Describes tooltip rich content callback for context provider
 */
export type TooltipRichContentCallback = CallbackWithParameter<TooltipRichContent, void>;
