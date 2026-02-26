import type { PropsWithChildren } from "react";

import type { IChildrenType, IItems, IText } from "@react-library/common";

import type { DemoContentChildren } from "../enums/demo-content-children.type";
import type { DemoContentChildrenItemProps } from "./demo-content-children-item-props.type";

type DemoContentChildrenPropsBase<TDemoContentChildren extends DemoContentChildren> = (
	IChildrenType<TDemoContentChildren>
);

export type DemoContentChildrenPropsAny = (
	DemoContentChildrenPropsBase<typeof DemoContentChildren.Any> &
	PropsWithChildren
);

export type DemoContentChildrenPropsItems = (
	DemoContentChildrenPropsBase<typeof DemoContentChildren.Items> &
	IItems<Array<DemoContentChildrenItemProps>>
);

export type DemoContentChildrenPropsText = (
	DemoContentChildrenPropsBase<typeof DemoContentChildren.Text> &
	IText<string>
);

export type DemoContentChildrenProps = (
	DemoContentChildrenPropsAny |
	DemoContentChildrenPropsItems |
	DemoContentChildrenPropsText
);
