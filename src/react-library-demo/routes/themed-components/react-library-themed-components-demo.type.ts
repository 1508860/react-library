/**
 * React library component demo types
 */
export const ReactLibraryThemedComponentsDemo = {
	"Badge": "ReactLibraryThemedComponentsDemo-Badge",
	"Button": "ReactLibraryThemedComponentsDemo-Button",
	"ButtonGroup": "ReactLibraryThemedComponentsDemo-ButtonGroup",
	"FloatingButtonGroup": "ReactLibraryThemedComponentsDemo-FloatingButtonGroup",
	"LoadingIndicator": "ReactLibraryThemedComponentsDemo-LoadingIndicator",
	"NavigationBar": "ReactLibraryThemedComponentsDemo-NavigationBar",
	"NavigationRail": "ReactLibraryThemedComponentsDemo-NavigationRail",
	"ProgressIndicator": "ReactLibraryThemedComponentsDemo-ProgressIndicator"
} as const satisfies Record<string, string>;

/**
 * Type for {@link ReactLibraryThemedComponentsDemo}
 */
export type ReactLibraryThemedComponentsDemo = (typeof ReactLibraryThemedComponentsDemo)[keyof typeof ReactLibraryThemedComponentsDemo];
