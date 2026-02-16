import type { IDefaultLoadingElement, ILoadingElement, ISegmentId } from "@react-library/common"

import type { RouterGuardLoading } from "../../../types/router-guard-loading.type";
import type { RouterSegmentId } from "../../../types/router-segment-id.type";

export type RouterGuardLoadingResolverProps = (
	IDefaultLoadingElement<RouterGuardLoading> &
	Partial<ILoadingElement<RouterGuardLoading>> &
	ISegmentId<RouterSegmentId>
);
