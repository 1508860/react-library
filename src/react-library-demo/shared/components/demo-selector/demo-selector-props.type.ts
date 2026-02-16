import type { ReactElement } from "react";

import type {
	ArrayMinLength1,
	IChild,
	IDefaultSubItemId,
	IElement,
	IId,
	ISubItems,
	ITitle
} from "@react-library/common";

export type DemoSelectorItems<TSubItemId extends (number | string)> = ArrayMinLength1<DemoSelectorItem<TSubItemId>>;
export type DemoSelectorSubItems<TSubItemId extends (number | string)> = ArrayMinLength1<DemoSelectorSubItem<TSubItemId>>;

export type DemoSelectorProps<TSubItemId extends (number | string)> = (
	IChild<DemoSelectorItems<TSubItemId>> &
	Partial<IDefaultSubItemId<TSubItemId>>
);

export type DemoSelectorItem<TSubItemId extends (number | string)> = (
	IId<number> &
	ITitle<string> &
	ISubItems<DemoSelectorSubItems<TSubItemId>>
);

export type DemoSelectorSubItem<TSubItemId extends (number | string)> = (
	IElement<() => ReactElement> &
	IId<TSubItemId> &
	ITitle<string>
);
