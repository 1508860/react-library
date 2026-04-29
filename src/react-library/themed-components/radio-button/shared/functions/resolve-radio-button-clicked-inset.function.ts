import { generateGuid, type SizePx } from "@react-library/common";
import type { TransitionPulseInsetData } from "@react-library/components";

import { RADIO_BUTTON_SIZE_TARGET_CONTAINER } from "../constants/radio-button-size.const";

/**
 * Resolve {@link TransitionPulseInsetData} for the radio button
 */
export function resolveRadioButtonClickedInset(): TransitionPulseInsetData {

	const inset: SizePx = RADIO_BUTTON_SIZE_TARGET_CONTAINER / 2;

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
