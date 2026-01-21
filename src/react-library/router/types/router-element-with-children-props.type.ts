import type { ReactElement } from "react";

import type { IChild } from "@react-library/common";

import type { RouterSegmentIdProps } from "./router-segment-id-props.type";

export type RouterElementWithChildrenProps = (
	IChild<ReactElement> &
	RouterSegmentIdProps
);
