
import type {
	IColourScheme,
	IHeight,
	IIncludeRenderCounter,
	IIndentIndex,
	IJustify,
	IOrientation,
	IWidth,
	Orientation,
	Size
} from "@react-library/common";

import type { DemoContentColourScheme } from "../enums/demo-content-colour-scheme.type";
import type { DemoContentJustify } from "../enums/demo-content-justify.type";
import type { DemoContentChildrenProps } from "./demo-content-children-props.type";
import type { DemoContentIndentIndex } from "./demo-content-indent-index.type";

export type DemoContentProps = (
	IColourScheme<DemoContentColourScheme> &
	DemoContentChildrenProps &
	IHeight<Size | "auto"> &
	Partial<IIncludeRenderCounter<boolean>> &
	Partial<IIndentIndex<DemoContentIndentIndex>> &
	IJustify<DemoContentJustify> &
	IOrientation<Orientation> &
	IWidth<Size | "auto">
);
