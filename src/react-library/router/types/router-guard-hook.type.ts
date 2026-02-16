import type { ArrayMinLength1, IFailureElement, IHook, ILoadingElement } from "@react-library/common";

import type { RouterGuardFailure } from "./router-guard-failure.type";
import type { RouterGuardHookCallback } from "./router-guard-hook-callback.type";
import type { RouterGuardLoading } from "./router-guard-loading.type";

export type RouterGuardHook = (
	Partial<IFailureElement<RouterGuardFailure>> &
	IHook<RouterGuardHookCallback> &
	Partial<ILoadingElement<RouterGuardLoading>>
);

export type RouterGuardHooks = ArrayMinLength1<RouterGuardHook>;
