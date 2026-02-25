import type { ReactElement } from "react";

import type { CallbackWithParameter, IChild } from "@react-library/common";

import type { TooltipChildProps } from "./tooltip-child-props.type";

/**
 * Describes child element for the tooltip
 */
export type TooltipChildren = IChild<CallbackWithParameter<TooltipChildProps, ReactElement>>;
