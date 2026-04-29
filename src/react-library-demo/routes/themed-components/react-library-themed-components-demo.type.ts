/**
 * React library component demo types
 */
export const ReactLibraryThemedComponentsDemo = {
	"Badge": "ReactLibraryThemedComponentsDemo-Badge",
	"Button": "ReactLibraryThemedComponentsDemo-Button",
	"ButtonGroup": "ReactLibraryThemedComponentsDemo-ButtonGroup",
	"Checkbox": "ReactLibraryThemedComponentsDemo-Checkbox",
	"FloatingButtonGroup": "ReactLibraryThemedComponentsDemo-FloatingButtonGroup",
	"LoadingIndicator": "ReactLibraryThemedComponentsDemo-LoadingIndicator",
	"Modals": "ReactLibraryThemedComponentsDemo-Modals",
	"NavigationBar": "ReactLibraryThemedComponentsDemo-NavigationBar",
	"NavigationRail": "ReactLibraryThemedComponentsDemo-NavigationRail",
	"ProgressIndicator": "ReactLibraryThemedComponentsDemo-ProgressIndicator",
	"RadioButton": "ReactLibraryThemedComponentsDemo-RadioButton",
	"SideSheet": "ReactLibraryThemedComponentsDemo-SideSheet",
	"TextField": "ReactLibraryThemedComponentsDemo-TextField",
	"Tooltips": "ReactLibraryThemedComponentsDemo-Tooltips"
} as const satisfies Record<string, string>;

/**
 * Type for {@link ReactLibraryThemedComponentsDemo}
 */
export type ReactLibraryThemedComponentsDemo = (typeof ReactLibraryThemedComponentsDemo)[keyof typeof ReactLibraryThemedComponentsDemo];
