import { generateGuid, pointerPositionInElement } from "@react-library/common";
import type { TransitionPulseInsetData } from "@react-library/components";

/**
 * Resolve {@link TransitionPulseInsetData} for {@link element}
 * @param element
 */
export function resolveTransitionPulseInsetFromEvent(event: React.MouseEvent<Element, MouseEvent>): TransitionPulseInsetData {
	return ({
		inset: pointerPositionInElement(event.currentTarget, event),
		key: generateGuid()
	});
}
