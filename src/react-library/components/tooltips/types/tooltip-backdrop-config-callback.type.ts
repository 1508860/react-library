import type { CallbackWithParameter } from "@react-library/common";

import type { TooltipBackdropConfig } from "./tooltip-backdrop-config.type";

/**
 * Describes tooltip backdrop config callback for context provider
 */
export type TooltipBackdropConfigCallback = CallbackWithParameter<(TooltipBackdropConfig | undefined), void>;
