export const VirtualScrollDemoItemStyle = {
	Item: "item",
	ItemChild: "item-child"
} as const satisfies Record<string, string>;

export type VirtualScrollDemoItemStyle = (typeof VirtualScrollDemoItemStyle)[keyof typeof VirtualScrollDemoItemStyle];
