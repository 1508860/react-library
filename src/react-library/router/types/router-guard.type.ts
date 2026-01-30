import type { ArrayMinLength1 } from "@react-library/common";

import type { RouterGuardProps } from "./router-guard-props.type";

export type RouterGuard = (props: RouterGuardProps) => boolean;

export type RouterGuards = ArrayMinLength1<RouterGuard>;
