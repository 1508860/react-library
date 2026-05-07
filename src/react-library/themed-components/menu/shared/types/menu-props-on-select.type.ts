import type { CallbackWithParameter, IOnSelect } from "@react-library/common";

import type { MenuPropsId } from "./menu-props-id.type";
import type { MenuPropsIsSelected } from "./menu-props-is-selected.type";

/**
 * Describes props for a menu on select event
 */
export type MenuPropsOnSelect = (
	IOnSelect<CallbackWithParameter<MenuPropsOnSelectParam, void>>
);

/**
 * Describes props for a menu on select event parameter
 */
export type MenuPropsOnSelectParam = (
	MenuPropsId &
	MenuPropsIsSelected
);
