# Generic
- "Run npm run knip"
- Remove primitives from common interfaces? (number | string | RefCallback, | EventHandler) Look at react imports
- Remove function calls to resolve components in all functional components
- Move components with multi functions (child components) in to separate files?
- Do I need arrow functions for lazy loaded components?
	- Show if component?
- Look at transition / animation across project and see what other transition components can be implemented
- Look at arrow functions in components and change to use callback instead
- Extract all props in to their own types first or only for complex multi component ones?
- Convert typescript styles to CSS apart from conditional styling. Make use of use callback?
- Check for casts (" as ")
	- resolveTooltipChildProps
- Use Pascal case for enums or camel case?
- Make folder names consistent. When to use plural or not?
- (Make events "on<Event>" e.g. "onDismiss"?)
- Implement throttle / debounce methods?
	- Create type for length of time (ms, ss, mm, hh) etc and add methods to convert between and use for throttle & debounce methods
- Correct uses of null vs undefined
- Check usage of stop propogation and target check?
- Animation
	- Move animation durations to a config object for colour scheme?
- Custom hooks
	- How to deal with complex state comparisons before setting state (currently just using ref to get at previous state)
	- Make sure we're not setting state if values are the same for primitive / complex types
- Performance
	- Check usage of useEffect, useLayoutEffect, useCallback
		- Make everything use effect and see where layout or callback can be used etc
	- Use callback for style functions?
		- Convert functions with no parameters to constants and rename folder to styles instead of functions
	- Get rid of inline functions for events etc and assign to a use callback hook variable
	- Check for unneeded uses of useState
	- Use ref instead of use state for parameters of custom "use" hooks (i.e. tooltip element)
	- Check for use state for setting ref to element and make use of ref callback instead? (See: view divider, tooltip, virtual scroll base)
	- Look at propgation and prevent default to see if they work

# React Library

## Common

- DONE

## Components
- Modal
	- Make draggable?
- Tooltip
	- Tooltip jumps from top left to final position. Sort it
		- Come up with better solution for that
	- Add text overflow variant of tooltip. Pass in span? Add ellipsis to span text
	- Make tooltip disappear if child element is not in viewport?
		- Intersection observer
		- Could just make disappear if there's any resize at all of overlay portal
		- Or just dismiss if any scrolling is done etc. Maybe use backdrop to prevent other interaction whilst tooltip is showing
	- Calculate best percentage of tooltip shown if none fit and show that one
	- Allow tooltip itself to be hovered over as a configurable flag of the tooltip props
	- Make use of CSS shape for tooltip arrow instead of providing a react element
- Transition
	- Size
- Virtual scroll
	- Look at implementation to prevent rerenders for in viewport elements
	- Refactor

## Material Icons

- DONE

## Router
- Only modify path name and maintain query params etc?
- Query parameters?
- Route parameters?
- Remove segment id from root
- Tidy up router package and comment everything (See route.type)

## Themed components
- Look at focused state for components
- Components
	- Buttons
		- Button
			- Transition for FAB menu
			- Refactor
		- Button group
			- Selection
				- Decouple base types used from buttons and implement own types to map to button
				- Don't allow button style for this group and choose thick if selected, default if not
	- Date & time picker
		- Date picker
			- Implement
		- Time picker
			- Implement
	- Loading & progress
		- Loading indicator
			- Refactor in to sub component files
		- Progress indicator
			- Refactor in to sub component files
	- Navigation
		- Navigation bar
			- Add way to memo elements to maintain state when navigating back?
			- Add fallback horizontal scroll?
		- Navigation rail
			- Add way to memo elements to maintain state when navigating back?
			- Hover effect for burger menu?
			- Option to add FAB after menu icon. FAB has label when expanded, icon only if not
			- Option to add secondary items underneath primary items if expanded. Has heading
			- Optional divider
	- Sheets
		- Bottom sheet
			- Implement
		- Side sheet
			- Add hover / press effect for back / close icons
	- All other components
		- App bars
		- Cards
		- Carousel
		- Checkbox
		- Chips
		- Dialogs
		- Lists
		- Menus
		- Radio button
		- Search
		- Sliders
		- Snackbar
		- Switch
		- Tabs
		- Text fields
		- Toolbars
		- Tooltip

# Demo

- DONE
