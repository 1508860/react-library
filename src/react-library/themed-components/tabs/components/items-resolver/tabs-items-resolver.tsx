import { Fragment, useCallback, type ReactNode } from "react";

import { Orientation, useResolveState, type Callback } from "@react-library/common";
import { TransitionPulse, TransitionTiming, HoverLayer } from "@react-library/components";

import { Badge, BadgeAnchored } from "../../../badge";

import { TABS_TRANSITION_MS } from "../../constants/tabs-transition.const";
import { TabsContent } from "../../enums/tabs-content.type";
import { TabsStyle } from "../../enums/tabs-style.type";
import type { TabsItemOrientation } from "../../types/tabs-props-item-orientation.type";

import { TabsItemActiveIndicator } from "../item-active-indicator";
import { TabsItemContainer } from "../item-container";
import { TabsItemContent } from "../item-content";
import { TabsItemIcon } from "../item-icon";
import { TabsItemLabel } from "../item-label";
import { TabsItemProvider } from "../item-provider";

import type { TabsItemsResolverProps } from "./types/tabs-items-resolver-props.type";

/**
 * Component to handle a tabs items resolver
 * @param props
 */
export function TabsItemsResolver(props: TabsItemsResolverProps) {

	// Item orientation
	const resolveItemOrientation = useCallback<Callback<TabsItemOrientation>>(
		() => (props.style === TabsStyle.Primary && props.content === TabsContent.WithIcon) ? props.itemOrientation : Orientation.Horizontal,
		[props]
	);
	const itemOrientation = useResolveState(resolveItemOrientation);

	// Items
	const resolveItems = useCallback<Callback<ReactNode>>(
		() => {
			if (props.content === TabsContent.WithIcon) return (
				props.items.map(item => (
					<TabsItemProvider
						id={item.id}
						key={item.id}
					>
						<TabsItemContainer
							onValueChange={item.onValueChange}
							style={props.style}
						>
							<TabsItemContent
								itemOrientation={itemOrientation}
								style={props.style}
							>
								{
									itemOrientation === Orientation.Horizontal ?
										<Fragment key={Orientation.Horizontal}>
											<TabsItemIcon
												style={props.style}
												iconName={item.iconName}
											/>
											<TabsItemLabel
												key="label"
												label={item.label}
												style={props.style}
											/>
											{
												item.showBadge ?
													<Badge
														key="badge"
														label={item.badgeLabel}
													/> :
													<Fragment key="no-badge" />
											}
										</Fragment> :
										<Fragment key={Orientation.Vertical}>
											<BadgeAnchored
												key="badge"
												label={item.badgeLabel}
												show={item.showBadge}
											>
												<TabsItemIcon
													style={props.style}
													iconName={item.iconName}
												/>
											</BadgeAnchored>
											<TabsItemLabel
												label={item.label}
												style={props.style}
												key="label"
											/>
										</Fragment>

								}
							</TabsItemContent>
							<TabsItemActiveIndicator style={props.style} />
							<TransitionPulse
								durationMs={TABS_TRANSITION_MS}
								key="pulse-layer"
								timing={TransitionTiming.EaseInOut}
							/>
							<HoverLayer key="hover-layer" />
						</TabsItemContainer>
					</TabsItemProvider>
				))
			);

			return (
				props.items.map(item => (
					<TabsItemProvider
						id={item.id}
						key={item.id}
					>
						<TabsItemContainer
							onValueChange={item.onValueChange}
							style={props.style}
						>
							<TabsItemContent
								itemOrientation={itemOrientation}
								style={props.style}
							>
								<TabsItemLabel
									key="label"
									label={item.label}
									style={props.style}
								/>
								{
									item.showBadge ?
										<Badge
											key="badge"
											label={item.badgeLabel}
										/> :
										<Fragment key="no-badge" />
								}
							</TabsItemContent>
							<TabsItemActiveIndicator style={props.style} />
							<TransitionPulse
								durationMs={TABS_TRANSITION_MS}
								key="pulse-layer"
								timing={TransitionTiming.EaseInOut}
							/>
							<HoverLayer key="hover-layer" />
						</TabsItemContainer>
					</TabsItemProvider>
				))
			);
		},
		[props.content, props.items, props.style, itemOrientation]
	);
	const items = useResolveState(resolveItems);

	return (
		items
	);
}
