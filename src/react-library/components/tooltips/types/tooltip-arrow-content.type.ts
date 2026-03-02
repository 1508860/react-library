import type { ReactElement } from "react";

import type { Callback, IArrowContent } from "@react-library/common";

/**
 * Describes tooltip arrow content
 */
export type TooltipArrowContent = IArrowContent<Callback<ReactElement>>;
