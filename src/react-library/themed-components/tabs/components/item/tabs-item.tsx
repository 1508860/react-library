import { Fragment, useCallback, useState } from "react";

import {
	useResolveState,
	type Callback,
	type CallbackWithParameter,
	type Size
} from "@react-library/common";
import {
	HoverLayer,
	HoverLayerColourProvider,
	HoverLayerShowProvider,
	resolveTransitionPulseInsetFromEvent,
	TransitionPulse,
	TransitionPulseColourProvider,
	TransitionPulseInsetDataProvider,
	TransitionSize,
	TransitionSizeDirection,
	TransitionTiming,
	type TransitionPulseInsetData
} from "@react-library/components";
import { MaterialIconStyle, MaterialIconSvg } from "@react-library/material-icons";

import { Badge } from "../../../badge";

import { TABS_PROPERTY_MAP } from "../../constants/tabs-property-map.const";
import { TABS_TRANSITION_MS } from "../../constants/tabs-transition.const";
import type { TabsItemColourState } from "../../types/tabs-colour-state.type";
import { useTabsColourState } from "../../hooks/tabs-colour-state.hook";

import { tabsItemActiveIndicatorStyle } from "./styles/tabs-item-active-indicator-style.function";
import { tabsItemContainerStyle } from "./styles/tabs-item-container-style.function";
import { tabsItemContentStyle } from "./styles/tabs-item-content-style.function";
import { tabsItemLabelStyle } from "./styles/tabs-item-label-style.function";
import type { TabsItemProps } from "./types/tabs-item-props.type";
import { TabsContent } from "../../enums/tabs-content.type";

/**
 * Component to handle a tabs item
 * @param props
 */
export function TabsItem(props: TabsItemProps) {

	// Local contexts
	const colourState = useTabsColourState();

	// Is active
	const resolveIsActive = useCallback<Callback<boolean>>(() => props.item.id === props.value, [props.item.id, props.value]);
	const isActive = useResolveState(resolveIsActive);

	// Active indicator
	const resolveActiveIndicatorWidth = useCallback<Callback<Size>>(() => isActive ? "100%" : 0, [isActive]);
	const activeIndicatorWidth = useResolveState(resolveActiveIndicatorWidth);

	// Resolve active related colour
	const resolveActiveColourState = useCallback<Callback<TabsItemColourState>>(
		() => colourState.isActive[`${isActive}`],
		[colourState.isActive, isActive]
	);
	const activeColourState = useResolveState(resolveActiveColourState);

	// Resolve icon style
	const resolveIconStyle = useCallback<Callback<MaterialIconStyle>>(
		() => isActive ? MaterialIconStyle.DefaultFilled : MaterialIconStyle.Default,
		[isActive]
	);
	const iconStyle = useResolveState(resolveIconStyle);

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
			props.item.onValueChange();
		},
		[props.item]
	);

	return (
		<div
			onClick={onClick}
			onPointerCancel={onPointerLeave}
			onPointerEnter={onPointerEnter}
			onPointerLeave={onPointerLeave}
			style={tabsItemContainerStyle(props.style)}
		>
			<div
				key="content"
				style={tabsItemContentStyle(props.itemOrientation, props.style)}
			>
				{
					(
						props.content === TabsContent.WithIcon &&
						props.item.iconName
					) ?
						<Badge
							key="badge"
							label={props.item.badgeLabel}
							show={props.item.showBadge}
						>
							<MaterialIconSvg
								colour={activeColourState.icon}
								name={props.item.iconName}
								size={TABS_PROPERTY_MAP.style[props.style].item.content.iconSize}
								style={iconStyle}
							/>
						</Badge> :
						<Fragment key="no-badge" />
				}
				<span
					key="label"
					style={tabsItemLabelStyle(props.style)}
				>
					{props.item.label}
				</span>
			</div>
			<TransitionSize
				direction={TransitionSizeDirection.Horizontal}
				durationMs={TABS_TRANSITION_MS}
				key="active-indicator"
				timing={TransitionTiming.OvershootInOut}
				width={activeIndicatorWidth}
			>
				<div
					style={tabsItemActiveIndicatorStyle(props.style, colourState)}
				/>
			</TransitionSize>
			<TransitionPulseColourProvider
				colour={colourState.pulse}
				key="pulse-layer"
			>
				<TransitionPulseInsetDataProvider insetData={transitionPulseInsetData}>
					<TransitionPulse
						durationMs={TABS_TRANSITION_MS}
						timing={TransitionTiming.EaseInOut}
					/>
				</TransitionPulseInsetDataProvider>
			</TransitionPulseColourProvider>
			<HoverLayerColourProvider
				colour={activeColourState.hover}
				key="hover-layer"
			>
				<HoverLayerShowProvider show={isHovered}>
					<HoverLayer />
				</HoverLayerShowProvider>
			</HoverLayerColourProvider>
		</div>
	);
}
