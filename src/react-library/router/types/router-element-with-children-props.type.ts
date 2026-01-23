import type { ReactElement } from "react";

import type { IChild, ISegmentId } from "@react-library/common";

import type { RouterSegmentId } from "./router-segment-id.type";

export type RouterElementWithChildrenProps = (
	IChild<ReactElement> &
	ISegmentId<RouterSegmentId>
);
