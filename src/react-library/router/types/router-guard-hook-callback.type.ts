import type { RouterGuardState } from "../enums/router-guard-state.type";
import type { RouterGuardProps } from "./router-guard-props.type";

export type RouterGuardHookCallback = (props: RouterGuardProps) => RouterGuardState;
