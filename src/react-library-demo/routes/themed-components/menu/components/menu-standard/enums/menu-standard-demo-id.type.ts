/**
 * Menu standard demo id
 */
export const MenuStandardDemoId = {
	Group1: "group-1",
	Group2: "group-2",
	Group3: "group-3",
	Group4: "group-4",
	Section1: "section-1",
	Section2: "section-2",
	Section3: "section-3",
	Section4: "section-4",
	Section5: "section-5",
	Standard1: "standard-1",
	Standard2: "standard-2",
	Standard3: "standard-3",
	Standard4: "standard-4",
	Standard5: "standard-5",
	Standard6: "standard-6",
	Standard7: "standard-7",
	Standard8: "standard-8",
	Standard9: "standard-9",
	Standard10: "standard-10",
	Standard11: "standard-11",
	Standard12: "standard-12",
	Submenu1: "submenu-1",
	Submenu2: "submenu-2",
	Title1: "title-1",
	Title2: "title-2",
	Title3: "title-3",
	Title4: "title-4",
	Title5: "title-5"
} as const satisfies Record<string, (number | string)>;

/**
 * Type for {@link MenuStandardDemoId}
 */
export type MenuStandardDemoId = (typeof MenuStandardDemoId)[keyof typeof MenuStandardDemoId];
