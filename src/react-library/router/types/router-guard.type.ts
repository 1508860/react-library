import type { IElement, ILoadingElement, IHooks } from "@react-library/common";

import type { RouterGuardElement } from "./router-guard-element.type";
import type { RouterGuardHooks } from "./router-guard-hook.type";

export type RouterGuard = (
	Partial<IElement<RouterGuardElement>> &
	Partial<ILoadingElement<RouterGuardElement>> &
	IHooks<RouterGuardHooks>
);
