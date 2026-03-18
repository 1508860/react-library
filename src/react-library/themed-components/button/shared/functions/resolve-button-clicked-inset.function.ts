import { generateGuid, pointerPositionInElement } from "@react-library/common";
import type { TransitionPulseInsetData } from "@react-library/components";

import type { ButtonClickTarget } from "../types/button-click-target.type";

/**
 * Resolve {@link TransitionPulseInsetData} for {@link element}
 * @param element
 */
export function resolveButtonClickedInset(event: React.MouseEvent<ButtonClickTarget, MouseEvent>): TransitionPulseInsetData {
	return ({
		inset: pointerPositionInElement(event.currentTarget, event),
		key: generateGuid()
	});
}
