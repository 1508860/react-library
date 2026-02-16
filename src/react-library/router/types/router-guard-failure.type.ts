import type { ReactElement } from "react";

import type { RouterGuardFailureProps } from "./router-guard-failure-props.type";

export type RouterGuardFailure = (params: RouterGuardFailureProps) => ReactElement;
