import { useCallback, useState } from "react";

import {
	type Callback,
	type CallbackWithParameter
} from "@react-library/common";
import {
	HoverLayerColourProvider,
	HoverLayerShowProvider,
	resolveTransitionPulseInsetFromEvent,
	TransitionPulseInsetDataProvider,
	type TransitionPulseInsetData
} from "@react-library/components";

import { useTabsColourState } from "../../hooks/tabs-colour-state.hook";
import { useTabsItemIsActiveContext } from "../../hooks/tabs-item-is-active-context.hook";

import { tabsItemContainerStyle } from "./styles/tabs-item-container-style.function";
import type { TabsItemContainerProps } from "./types/tabs-item-container-props.type";

/**
 * Component to handle a tabs item container
 * @param props
 */
export function TabsItemContainer(props: TabsItemContainerProps) {

	// Local contexts
	const colourState = useTabsColourState();
	const isActive = useTabsItemIsActiveContext();

	// Hover state
	const [isHovered, setIsHovered] = useState<boolean>(() => false);
	const onPointerEnter = useCallback<Callback<void>>(() => setIsHovered(true), []);
	const onPointerLeave = useCallback<Callback<void>>(() => setIsHovered(false), []);

	// Transition pulse inset data
	const [transitionPulseInsetData, setTransitionPulseInsetData] = useState<TransitionPulseInsetData | undefined>(() => undefined);

	// Handle click event
	const onClick = useCallback<CallbackWithParameter<React.MouseEvent<Element>, void>>(
		(event) => {
			setTransitionPulseInsetData(resolveTransitionPulseInsetFromEvent(event));
			props.onValueChange();
		},
		[props]
	);

	return (
		<HoverLayerColourProvider colour={colourState.isActive[`${isActive}`].hover}>
			<HoverLayerShowProvider show={isHovered}>
				<TransitionPulseInsetDataProvider insetData={transitionPulseInsetData}>
					<div
						onClick={onClick}
						onPointerCancel={onPointerLeave}
						onPointerEnter={onPointerEnter}
						onPointerLeave={onPointerLeave}
						style={tabsItemContainerStyle(props.style)}
					>
						{props.children}
					</div>
				</TransitionPulseInsetDataProvider>
			</HoverLayerShowProvider>
		</HoverLayerColourProvider>
	);
}
