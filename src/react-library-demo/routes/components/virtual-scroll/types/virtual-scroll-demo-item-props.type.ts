import type { Callback, IColourScheme, IIndentIndex, IOnClick, IStyle, IText } from "@react-library/common";

import type { DemoContentColourScheme, DemoContentIndentIndex } from "@react-library-demo/shared";

import type { VirtualScrollDemoItemStyle } from "../enums";

export type VirtualScrollDemoItemBase<TStyle extends VirtualScrollDemoItemStyle> = (
	IStyle<TStyle>
);

export type VirtualScrollDemoItemProps = (
	IColourScheme<DemoContentColourScheme> &
	IOnClick<Callback<void>> &
	IText<string> &
	VirtualScrollDemoItemBase<typeof VirtualScrollDemoItemStyle.Item>
);

export type VirtualScrollDemoItemChildProps = (
	IIndentIndex<DemoContentIndentIndex> &
	IText<string> &
	VirtualScrollDemoItemBase<typeof VirtualScrollDemoItemStyle.ItemChild>
);

export type VirtualScrollDemoItemChildPropsAll = (
	VirtualScrollDemoItemProps |
	VirtualScrollDemoItemChildProps
);
