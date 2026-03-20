import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { FLOATING_BUTTON_GROUP_POSITION_CONTEXT } from "../constants/floating-button-group-position-context.const";
import type { FloatingButtonGroupPosition } from "../types/floating-button-group-position.type";

/**
 * Returns context for {@link FLOATING_BUTTON_GROUP_POSITION_CONTEXT} and ensures a non-null value
 */
export function useFloatingButtonGroupPositionContext(): FloatingButtonGroupPosition {
	const result = useContext(FLOATING_BUTTON_GROUP_POSITION_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};
