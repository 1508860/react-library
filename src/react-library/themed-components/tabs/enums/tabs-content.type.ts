/**
 * Tabs content
 */
export const TabsContent = {
	Default: "default",
	WithIcon: "with-icon"
} as const satisfies Record<string, string>;

/**
 * Type for {@link TabsContent}
 */
export type TabsContent = (typeof TabsContent)[keyof typeof TabsContent];
