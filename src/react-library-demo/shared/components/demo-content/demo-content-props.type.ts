
import type {
	ArrayMinLength1,
	IHeight,
	IText,
	IWidth,
	Size
} from "@react-library/common";

import type { DemoContentText } from "./demo-content-text.type";

export type DemoContentProps = (
	IHeight<Size> &
	IText<ArrayMinLength1<DemoContentText>> &
	IWidth<Size>
);
