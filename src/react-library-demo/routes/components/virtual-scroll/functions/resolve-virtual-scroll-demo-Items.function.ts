import type { SizePx } from "@react-library/common";

import type { VirtualScrollDemoItemChildData, VirtualScrollDemoItemData } from "../types";

export function resolveVirtualScrollDemoItems(
	dataLength: number,
	childDataLength: number,
	altRowSize: SizePx,
	altRowSizeEvery: number
): Array<VirtualScrollDemoItemData> {

	return Array.from({ length: dataLength }, (_, i) => i + 1)
		.map<VirtualScrollDemoItemData>(i => ({
			children: Array.from({ length: childDataLength }, (_2, i2) => i2 + 1).map<VirtualScrollDemoItemChildData>(i2 => ({
				id: i2,
				text: `This is a default description - ${i2}`,
				virtualScrollRowSize: (i2 % altRowSizeEvery === 0) ? altRowSize : undefined
			})),
			id: i,
			text: `This is a parent description - ${i}`,
			virtualScrollRowSize: (i % altRowSizeEvery === 0) ? altRowSize : undefined
		}))
}
