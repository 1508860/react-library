import { useCallback, useEffect, type ReactElement } from "react";

import {
	useResolveState,
	type Callback,
	type CallbackWithParameter,
	type Size
} from "@react-library/common";
import {
	useTooltipBackdropConfigCallbackContext,
	useTooltipContentCallbackContext,
	useTooltipShowCallbackContext,
	useTooltipShowContext
} from "@react-library/components";

import {
	type MenuSelectItems,
	type MenuSelectItem,
	MenuItemContent,
	MenuSelect,
	MenuStyle
} from "../../../menu";

import { useTextFieldEventsContext } from "../../shared/hooks/text-field-events-context.hook";

import type { TextFieldSelectInteraction } from "../enums/text-field-select-interaction.type";
import type { TextFieldSelectItemId } from "../types/text-field-select-item-id.type";
import type { TextFieldSelectItem } from "../types/text-field-select-item.type";

import { useTextFieldSelectMenuOnChangeContext } from "./text-field-select-menu-on-change-context.hook";

/**
 * Custom hook to resolve the menu content
 * @param interaction
 * @param isDisabled
 * @param items
 * @param height
 * @param width
 * @param style
 */
export function useTextFieldSelectMenuEffect<TId extends TextFieldSelectItemId>(
	interaction: TextFieldSelectInteraction,
	isDisabled: boolean | undefined,
	items: Array<TextFieldSelectItem<TId>>,
	height: Size,
	width: Size,
	style: MenuStyle
): void {
	// Tooltip contexts
	const tooltipBackdropConfigCallback = useTooltipBackdropConfigCallbackContext();
	const tooltipContentCallback = useTooltipContentCallbackContext();
	const tooltipShowCallback = useTooltipShowCallbackContext();
	const tooltipShow = useTooltipShowContext();

	// Local contexts
	const textFieldEvents = useTextFieldEventsContext();
	const textFieldSelectOnMenuChange = useTextFieldSelectMenuOnChangeContext();

	// Handle focus / blur events
	useEffect(
		() => tooltipShow ? textFieldEvents.onFocus() : textFieldEvents.onBlur(),
		[tooltipShow, textFieldEvents]
	);

	// Handle tooltp close if disabled
	useEffect(
		() => {
			if (!isDisabled) return;
			tooltipShowCallback(false);
		},
		[isDisabled, tooltipShowCallback]
	);

	// Resolve menu items
	const resolveItems = useCallback<Callback<MenuSelectItems>>(
		() => {
			const handleOnSelect: CallbackWithParameter<TId, void> = (
				interaction === "multi" ?
					(id) => textFieldSelectOnMenuChange(id) :
					(id) => {
						tooltipShowCallback(false);
						textFieldSelectOnMenuChange(id);
					}
			);
			return items.map<MenuSelectItem>(item => ({
				content: MenuItemContent.Standard,
				id: item.id,
				onSelect: () => handleOnSelect(item.id),
				text: item.text,
				isDisabled: item.isDisabled,
				supportingText: item.supportingText,
				trailingIconName: item.trailingIconName
			}));
		},
		[interaction, items, tooltipShowCallback, textFieldSelectOnMenuChange]
	);
	const menuItems = useResolveState(resolveItems);

	// Resolve tooltip content
	const menuResolverCallback = useCallback<Callback<ReactElement>>(
		() => (
			<MenuSelect
				containerHeight={height}
				containerWidth={width}
				items={menuItems}
				key="menu-select"
				style={style}
			/>
		),
		[height, style, width, menuItems]
	);

	// Handle tooltip backdrop
	useEffect(
		() => tooltipBackdropConfigCallback(tooltipShow ? { onDismiss: () => tooltipShowCallback(false) } : undefined),
		[tooltipBackdropConfigCallback, tooltipShowCallback, tooltipShow]
	);

	// Handle tooltip content
	useEffect(
		() => tooltipContentCallback(tooltipShow ? menuResolverCallback() : undefined),
		[tooltipContentCallback, tooltipShow, menuResolverCallback]
	);
};
