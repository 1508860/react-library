import { VirtualScrollRow } from "@react-library/components";

import type { IVirtualScrollTestParent, IVirtualScrollTestStandard } from "../interfaces";

export function resolveVirtualScrollDemoParentData(parentLength: number, standardLength: number, defaultRowSize: number): Array<IVirtualScrollTestParent> {

	const canShowChildrenEvery: number = 15;
	const altRowSize: number = 50;
	const altRowSizeEvery: number = 2;

	return Array.from({ length: parentLength }, (_, i) => i + 1)
		.map(i => ({
			id: i,
			text: `This is a parent description - ${i}`,
			renderCount: 0,
			virtualScrollCanShowChildren: i % canShowChildrenEvery === 0,
			virtualScrollChildren: Array.from({ length: standardLength }, (_2, i2) => i2 + 1).map<IVirtualScrollTestStandard>(i2 => ({
				id: i2,
				text: `This is a default description - ${i2}`,
				renderCount: 0,
				virtualScrollRowId: i2,
				virtualScrollRowSize: (i2 % altRowSizeEvery === 0) ? altRowSize : defaultRowSize
			})),
			virtualScrollRowId: i,
			virtualScrollRowType: VirtualScrollRow.Parent
		}))
}
