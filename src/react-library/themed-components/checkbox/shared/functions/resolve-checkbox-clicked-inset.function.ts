import { generateGuid, type SizePx } from "@react-library/common";
import type { TransitionPulseInsetData } from "@react-library/components";

import { CHECKBOX_SIZE_TARGET_CONTAINER } from "../constants/checkbox-size.const";

/**
 * Resolve {@link TransitionPulseInsetData} for the checkbox
 */
export function resolveCheckboxClickedInset(): TransitionPulseInsetData {

	const inset: SizePx = CHECKBOX_SIZE_TARGET_CONTAINER / 2;

	return ({
		inset: {
			bottom: inset,
			left: inset,
			right: inset,
			top: inset
		},
		key: generateGuid()
	});
}
