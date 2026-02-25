import type { ReactElement } from "react";

import type { Callback, IContent } from "@react-library/common";

/**
 * Describes tooltip content
 */
export type TooltipContent = IContent<Callback<ReactElement>>;
