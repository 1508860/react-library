
import type {
	IAlign,
	IColourScheme,
	IHeight,
	IIncludeRenderCounter,
	IIndentIndex,
	IJustify,
	IOrientation,
	IOverflow,
	IPaddingBottom,
	IPaddingLeft,
	IPaddingRight,
	IPaddingTop,
	IWidth,
	Orientation,
	Size
} from "@react-library/common";

import type { DemoContentAlign } from "../enums/demo-content-align.type";
import type { DemoContentColourScheme } from "../enums/demo-content-colour-scheme.type";
import type { DemoContentJustify } from "../enums/demo-content-justify.type";
import type { DemoContentOverflow } from "../enums/demo-content-overflow.type";
import type { DemoContentChildrenProps } from "./demo-content-children-props.type";
import type { DemoContentIndentIndex } from "./demo-content-indent-index.type";

export type DemoContentProps = (
	IAlign<DemoContentAlign> &
	IColourScheme<DemoContentColourScheme> &
	DemoContentChildrenProps &
	IHeight<Size | "auto"> &
	Partial<IIncludeRenderCounter<boolean>> &
	Partial<IIndentIndex<DemoContentIndentIndex>> &
	IJustify<DemoContentJustify> &
	IOrientation<Orientation> &
	IOverflow<DemoContentOverflow> &
	Partial<IPaddingBottom<Size>> &
	Partial<IPaddingLeft<Size>> &
	Partial<IPaddingRight<Size>> &
	Partial<IPaddingTop<Size>> &
	IWidth<Size | "auto">
);
