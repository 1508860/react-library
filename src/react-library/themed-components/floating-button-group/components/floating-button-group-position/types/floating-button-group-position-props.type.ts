import type { PropsWithChildren } from "react";

import type { IOrientation, IPositionStrategy } from "@react-library/common";

import type { FloatingButtonGroupOrientation } from "../../../types/floating-button-group-orientation.type";
import type { FloatingButtonGroupPositionStrategy } from "../../../types/floating-button-group-position-strategy.type";

/**
 * Props for floating button group position
 */
export type FloatingButtonGroupPositionProps = (
	IOrientation<FloatingButtonGroupOrientation> &
	IPositionStrategy<FloatingButtonGroupPositionStrategy> &
	PropsWithChildren
);
