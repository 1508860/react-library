
import type {
	ArrayMinLength1,
	IColourScheme,
	IHeight,
	IText,
	IWidth,
	Size
} from "@react-library/common";

import type { DemoContentColourScheme } from "../enums/demo-content-colour-scheme.type";
import type { DemoContentText } from "./demo-content-text.type";

export type DemoContentProps = (
	IColourScheme<DemoContentColourScheme> &
	IHeight<Size> &
	IText<ArrayMinLength1<DemoContentText>> &
	IWidth<Size>
);
