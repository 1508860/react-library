import type { PropsWithChildren } from "react";

import type { IDurationMs, PrefixKeys } from "@react-library/common";

/**
 * Props for transition rotate indefinite component
 */
export type TransitionRotateIndefiniteProps = (
	PrefixKeys<IDurationMs<number>, "fullRotation"> &
	PropsWithChildren
);
