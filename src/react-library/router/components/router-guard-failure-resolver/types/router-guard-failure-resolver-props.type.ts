import type { IDefaultFailureElement, IFailureElement, ISegmentId } from "@react-library/common"

import type { RouterGuardFailure } from "../../../types/router-guard-failure.type";
import type { RouterSegmentId } from "../../../types/router-segment-id.type";

export type RouterGuardFailureResolverProps = (
	IDefaultFailureElement<RouterGuardFailure> &
	Partial<IFailureElement<RouterGuardFailure>> &
	ISegmentId<RouterSegmentId>
);
