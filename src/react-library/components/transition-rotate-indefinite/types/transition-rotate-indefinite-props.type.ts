import type { PropsWithChildren } from "react";

import type { IfullRotationDurationMs } from "@react-library/common";

/**
 * Props for transition rotate indefinite component
 */
export type TransitionRotateIndefiniteProps = (
	IfullRotationDurationMs<number> &
	PropsWithChildren
);
