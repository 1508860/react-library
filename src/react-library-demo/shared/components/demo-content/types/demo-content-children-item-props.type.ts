import type { Callback, IAction, IId, IText, IType } from "@react-library/common";

import type { DemoContentChildrenItem } from "../enums/demo-content-children-item.type";

type DemoContentChildrenItemPropsBase<TDemoContentChildrenItem extends DemoContentChildrenItem> = (
	IId<number | string> &
	IType<TDemoContentChildrenItem>
);

export type DemoContentChildrenItemPropsButton = (
	IAction<Callback<void>> &
	DemoContentChildrenItemPropsBase<typeof DemoContentChildrenItem.Button> &
	IText<string>
);

export type DemoContentChildrenItemPropsText = (
	DemoContentChildrenItemPropsBase<typeof DemoContentChildrenItem.Text> &
	IText<string>
);

export type DemoContentChildrenItemProps = (
	DemoContentChildrenItemPropsButton |
	DemoContentChildrenItemPropsText
);
