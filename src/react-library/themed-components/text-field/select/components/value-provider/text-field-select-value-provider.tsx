import { useCallback, useEffect, useRef, useState } from "react";

import { MenuSelectedItemsProvider } from "../../../../menu";

import { TEXT_FIELD_SELECT_MENU_ON_CHANGE_CONTEXT } from "../../constants/text-field-select-menu-on-change.const";
import { TEXT_FIELD_SELECT_MENU_ON_CLEAR_CONTEXT } from "../../constants/text-field-select-menu-on-clear.const";
import { TextFieldSelectInteraction } from "../../enums/text-field-select-interaction.type";
import type { TextFieldSelectItemId } from "../../types/text-field-select-item-id.type";
import type { TextFieldSelectMenuOnChange } from "../../types/text-field-select-menu-on-change.type";
import type { TextFieldSelectMenuOnClear } from "../../types/text-field-select-menu-on-clear.type";

import type { TextFieldSelectValueProviderProps } from "./types/text-field-select-value-provider-props.type";

/**
 * Text field select value provider component
 */
export function TextFieldSelectValueProvider<TId extends TextFieldSelectItemId>(props: TextFieldSelectValueProviderProps<TId>) {

	// Selected ids to provide
	const [selectedItemIds, setSelectedItemIds] = useState<Array<TId>>(() => []);
	const selectedItemIdsRef = useRef<Array<TId>>(selectedItemIds);

	// Handle selected ids on value change
	const handleSetSelectedItemId = useCallback<TextFieldSelectMenuOnChange<TextFieldSelectItemId>>(
		(id: TextFieldSelectItemId) => {

			const validId: TId = id as TId; // TODO sort out casting

			if (props.interaction === TextFieldSelectInteraction.Multi) {
				if (selectedItemIdsRef.current.includes(validId)) props.onValueChange(selectedItemIdsRef.current.filter(x => x !== id));
				else props.onValueChange([...selectedItemIdsRef.current, validId]);
				return;
			}
			const newState = selectedItemIdsRef.current.length > 0 && selectedItemIdsRef.current[0] === id ? undefined : validId;
			props.onValueChange(newState);
		},
		[props]
	);

	// Clear selected ids
	const handleClearSelectedItemIds = useCallback<TextFieldSelectMenuOnClear>(
		() => {
			if (props.interaction === TextFieldSelectInteraction.Multi) {
				props.onValueChange(props.defaultValue ?? []);
				return;
			}
			props.onValueChange(props.defaultValue);
		},
		[props]
	);

	// Handle update selected ids based on value
	useEffect(
		() => {
			if (props.interaction === TextFieldSelectInteraction.Multi) {
				const newSelectedItemIds: Array<TId> = [...props.value];
				selectedItemIdsRef.current = newSelectedItemIds;
				setSelectedItemIds(newSelectedItemIds);
				return;
			}
			const newSelectedItemIds: Array<TId> = props.value !== undefined ? [props.value] : [];
			selectedItemIdsRef.current = newSelectedItemIds;
			setSelectedItemIds(newSelectedItemIds);
		},
		[props.interaction, props.value]
	);

	return (
		<TEXT_FIELD_SELECT_MENU_ON_CHANGE_CONTEXT value={handleSetSelectedItemId}>
			<TEXT_FIELD_SELECT_MENU_ON_CLEAR_CONTEXT value={handleClearSelectedItemIds}>
				<MenuSelectedItemsProvider selectedIds={selectedItemIds}>
					{props.children}
				</MenuSelectedItemsProvider>
			</TEXT_FIELD_SELECT_MENU_ON_CLEAR_CONTEXT>
		</TEXT_FIELD_SELECT_MENU_ON_CHANGE_CONTEXT>
	);
}
