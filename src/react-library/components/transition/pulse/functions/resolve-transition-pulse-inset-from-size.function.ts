import { generateGuid, type SizePx } from "@react-library/common";
import type { TransitionPulseInsetData } from "@react-library/components";

/**
 * Resolve {@link TransitionPulseInsetData} for a given {@link SizePx}
 */
export function resolveTransitionPulseInsetFromSize(size: SizePx): TransitionPulseInsetData {

	const inset: SizePx = size / 2;

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
