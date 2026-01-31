import type { ArrayMinLength1 } from "@react-library/common";

import type { RouterGuardState } from "../enums/router-guard-state.type";
import type { RouterGuardProps } from "./router-guard-props.type";

export type RouterGuardHook = (props: RouterGuardProps) => RouterGuardState;

export type RouterGuardHooks = ArrayMinLength1<RouterGuardHook>;
