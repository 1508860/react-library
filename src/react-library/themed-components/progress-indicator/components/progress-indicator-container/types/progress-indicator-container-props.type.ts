import type { PropsWithChildren } from "react";

import type { IPosition } from "@react-library/common";

import type { ProgressIndicatorPosition } from "../../../enums/progress-indicator-position.type";

/**
 * Props for progress indicator container
 */
export type ProgressIndicatorContainerProps = (
	IPosition<ProgressIndicatorPosition> &
	PropsWithChildren
);
