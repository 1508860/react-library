/**
 * Type for material icon names
 */
export const MaterialIconName = {
	Add: "Add",
	ArrowBack: "ArrowBack",
	Cancel: "Cancel",
	CheckCircle: "CheckCircle",
	ChevronRight: "ChevronRight",
	Close: "Close",
	Delete: "Delete",
	Error: "Error",
	ExpandCircleDown: "ExpandCircleDown",
	ExpandCircleUp: "ExpandCircleUp",
	Favorite: "Favorite",
	Home: "Home",
	KeyboardArrowDown: "KeyboardArrowDown",
	KeyboardArrowUp: "KeyboardArrowUp",
	Menu: "Menu",
	MenuOpen: "MenuOpen",
	Search: "Search",
	Settings: "Settings",
	Star: "Star",
	Visibility: "Visibility",
	VisibilityOff: "VisibilityOff"
} as const satisfies Record<string, string>;

/**
 * Type for {@link MaterialIconName}
 */
export type MaterialIconName = (typeof MaterialIconName)[keyof typeof MaterialIconName];
