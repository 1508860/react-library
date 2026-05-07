import { Fragment, useCallback, useEffect, useState } from "react";

import type { Callback } from "@react-library/common";
import { TransitionPulse, TransitionTiming } from "@react-library/components";

import { useMenuItemClickedInsetContextOptional } from "../../hooks/menu-item-clicked-inset-context-optional.hook";
import { useMenuItemColourStateContext } from "../../hooks/menu-item-colour-state-context.hook";

import { MENU_ITEM_PULSE_LAYER_TRANSITION_MS } from "./constants/menu-item-pulse-layer-transition.const";

/**
 * Menu item pulse layer component.
 * For creating a pulse effect when clicking the menu item
 * @param props
 */
export function MenuItemPulseLayer() {

	const clickedInset = useMenuItemClickedInsetContextOptional();
	const colourState = useMenuItemColourStateContext();

	const [show, setShow] = useState<boolean>(() => !!clickedInset);
	const handleOnComplete = useCallback<Callback<void>>(() => setShow(false), []);

	useEffect(() => setShow(!!clickedInset), [clickedInset]);

	if (!clickedInset || !show) return (
		<Fragment key="no-pulse-layer" />
	);

	return (
		<TransitionPulse
			colour={colourState.pulse}
			durationMs={MENU_ITEM_PULSE_LAYER_TRANSITION_MS}
			inset={clickedInset.inset}
			key={`pulse-layer-${clickedInset.key}`}
			timing={TransitionTiming.EaseInOut}
			onComplete={handleOnComplete}
		/>
	);
}
