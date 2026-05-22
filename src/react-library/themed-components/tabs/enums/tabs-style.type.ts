/**
 * Tabs style
 */
export const TabsStyle = {
	Primary: "primary",
	Secondary: "secondary"
} as const satisfies Record<string, string>;

/**
 * Type for {@link TabsStyle}
 */
export type TabsStyle = (typeof TabsStyle)[keyof typeof TabsStyle];
