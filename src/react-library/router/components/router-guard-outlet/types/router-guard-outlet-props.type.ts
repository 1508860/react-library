import type { ReactElement } from "react";

import type {
	IChild,
	IElement,
	IHookIndex,
	IHooks,
	ILoadingElement,
	ISegmentId
} from "@react-library/common"

import type { RouterGuardElement } from "../../../types/router-guard-element.type";
import type { RouterGuardHooks } from "../../../types/router-guard-hook.type";
import type { RouterSegmentId } from "../../../types/router-segment-id.type";

export type RouterGuardOutletProps = (
	IChild<ReactElement> &
	IElement<RouterGuardElement> &
	IHooks<RouterGuardHooks> &
	IHookIndex &
	ILoadingElement<RouterGuardElement> &
	ISegmentId<RouterSegmentId>
);
