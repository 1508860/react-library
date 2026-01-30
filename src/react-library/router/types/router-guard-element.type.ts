import type { ReactElement } from "react";

import type { RouterGuardElementProps } from "./router-guard-element-props.type";

export type RouterGuardElement = (params: RouterGuardElementProps) => ReactElement;
