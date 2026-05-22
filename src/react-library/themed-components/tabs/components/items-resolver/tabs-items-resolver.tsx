import { useCallback } from "react";

import { Orientation, useResolveState, type Callback } from "@react-library/common";

import { TabsContent } from "../../enums/tabs-content.type";
import { TabsStyle } from "../../enums/tabs-style.type";
import type { TabsItemOrientation } from "../../types/tabs-props-item-orientation.type";

import { TabsItem } from "../item/tabs-item";

import type { TabsItemsResolverProps } from "./types/tabs-items-resolver-props.type";

/**
 * Component to handle a tabs items resolver
 * @param props
 */
export function TabsItemsResolver(props: TabsItemsResolverProps) {

	const resolveItemOrientation = useCallback<Callback<TabsItemOrientation>>(
		() => props.style === TabsStyle.Primary ? props.itemOrientation : Orientation.Horizontal,
		[props]
	);
	const itemOrientation = useResolveState(resolveItemOrientation);

	if (props.content === TabsContent.WithIcon) return (
		props.items.map(item => (
			<TabsItem
				content={props.content}
				item={item}
				itemOrientation={itemOrientation}
				key={item.id}
				style={props.style}
				value={props.value}
			/>
		))
	);

	return (
		props.items.map(item => (
			<TabsItem
				content={props.content}
				item={item}
				itemOrientation={itemOrientation}
				key={item.id}
				style={props.style}
				value={props.value}
			/>
		))
	);
}
