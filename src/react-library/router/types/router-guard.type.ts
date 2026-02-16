import type { ILoadingElement, IHooks, IFailureElement } from "@react-library/common";

import type { RouterGuardFailure } from "./router-guard-failure.type";
import type { RouterGuardHooks } from "./router-guard-hook.type";
import type { RouterGuardLoading } from "./router-guard-loading.type";

export type RouterGuard = (
	Partial<IFailureElement<RouterGuardFailure>> &
	IHooks<RouterGuardHooks> &
	Partial<ILoadingElement<RouterGuardLoading>>
);
