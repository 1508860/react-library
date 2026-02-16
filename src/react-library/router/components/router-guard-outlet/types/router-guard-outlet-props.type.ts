import type { ReactElement } from "react";

import type {
	IChild,
	IFailureElement,
	IHookIndex,
	IHooks,
	ILoadingElement,
	ISegmentId
} from "@react-library/common"

import type { RouterGuardFailure } from "../../../types/router-guard-failure.type";
import type { RouterGuardLoading } from "../../../types/router-guard-loading.type";
import type { RouterGuardHooks } from "../../../types/router-guard-hook.type";
import type { RouterSegmentId } from "../../../types/router-segment-id.type";

export type RouterGuardOutletProps = (
	IChild<ReactElement> &
	IFailureElement<RouterGuardFailure> &
	IHooks<RouterGuardHooks> &
	IHookIndex &
	ILoadingElement<RouterGuardLoading> &
	ISegmentId<RouterSegmentId>
);
