import { useCallback } from "react";

import {
	useResolveState,
	type Callback,
	type CallbackWithParameter
} from "@react-library/common";
import type {
	TabsItemDefault,
	TabsItemsDefault
} from "@react-library/themed-components";

export function useTabsDemoItemsDefaultState(length: number, setValue: CallbackWithParameter<number, void>): TabsItemsDefault {

	const resolveState = useCallback<Callback<TabsItemsDefault>>(
		() => Array.from({ length: length }, (_, i) => i + 1).map<TabsItemDefault>(value => ({
			badgeLabel: value % 4 === 0 ? 1234 : undefined,
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
