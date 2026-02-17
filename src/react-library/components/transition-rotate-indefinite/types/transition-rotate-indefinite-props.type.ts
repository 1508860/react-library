import type { PropsWithChildren } from "react";

import type { IFullRotationDurationMs } from "@react-library/common";

/**
 * Props for transition rotate indefinite component
 */
export type TransitionRotateIndefiniteProps = (
	IFullRotationDurationMs<number> &
	PropsWithChildren
);
