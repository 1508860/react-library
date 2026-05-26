import { useCallback } from "react";

import {
	useResolveState,
	type Callback,
	type CallbackWithParameter
} from "@react-library/common";
import type {
	TabsItemWithIcon,
	TabsItemsWithIcon
} from "@react-library/themed-components";
import { MaterialIconName } from "@react-library/material-icons";

export function useTabsDemoItemsWithIconState(length: number, setValue: CallbackWithParameter<number, void>): TabsItemsWithIcon {

	const resolveState = useCallback<Callback<TabsItemsWithIcon>>(
		() => Array.from({ length: length }, (_, i) => i + 1).map<TabsItemWithIcon>(value => ({
			badgeLabel: value % 4 === 0 ? 1234 : undefined,
			iconName: MaterialIconName.Favorite,
			id: value,
			label: `Label ${value}`,
			onValueChange: () => setValue(value),
			showBadge: value % 2 === 0
		})),
		[length, setValue]
	);

	const state = useResolveState(resolveState);

	return state;
}
