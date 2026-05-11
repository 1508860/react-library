import { useCallback } from "react";

import { useResolveState, type Callback } from "@react-library/common";

import type { MenuId } from "../types/menu-id.type";

import { useMenuSelectedIdsContextOptional } from "./menu-selected-ids-context-optional.hook";

/**
 * Custom hook to determine if a menu item id is part of the selected collection
 * @param id
 */
export function useMenuItemIsSelectedState(id: MenuId): boolean {

	const menuSelectedIds = useMenuSelectedIdsContextOptional();

	const resolveState = useCallback<Callback<boolean>>(
		() => menuSelectedIds ? menuSelectedIds.includes(id) : false,
		[id, menuSelectedIds]
	);

	const state = useResolveState(resolveState);

	return state;
};
