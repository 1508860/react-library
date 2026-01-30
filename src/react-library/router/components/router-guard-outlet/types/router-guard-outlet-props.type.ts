import type { ReactElement } from "react";

import type {
	IChild,
	IGuardElement,
	IGuardIndex,
	IGuards,
	ISegmentId
} from "@react-library/common"

import type { RouterGuardElement } from "../../../types/router-guard-element.type";
import type { RouterGuards } from "../../../types/router-guard.type";
import type { RouterSegmentId } from "../../../types/router-segment-id.type";

export type RouterGuardOutletProps = (
	IGuardElement<RouterGuardElement> &
	IGuards<RouterGuards> &
	IGuardIndex &
	IChild<ReactElement> &
	ISegmentId<RouterSegmentId>
);
