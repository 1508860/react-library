import type { ReactElement } from "react";

import type { ArrayMinLength1, IChild } from "@react-library/common";

export type DemoSelectorItems<TSubItemId> = ArrayMinLength1<IDemoSelectorItem<TSubItemId>>;
export type DemoSelectorSubItems<TSubItemId> = ArrayMinLength1<IDemoSelectorSubItem<TSubItemId>>;

export interface IDemoSelectorProps<TSubItemId> extends IChild<DemoSelectorItems<TSubItemId>> {
	defaulSubItemId?: TSubItemId;
}

export interface IDemoSelectorItem<TSubItemId> {
	id: number;
	title: string;
	subItems: DemoSelectorSubItems<TSubItemId>;
}

export interface IDemoSelectorSubItem<TSubItemId> {
	element: () => ReactElement;
	id: TSubItemId;
	title: string;
}
