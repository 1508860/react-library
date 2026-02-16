# Generic
- Get rid of prefix keys and make all interfaces required in the common package?
	- Get rid of constraints on generics in common interfaces (Look for "import")
	- Get rid of unused common interfaces?
- Remove function calls to resolve components in all functional components
- Move components with multi functions (child components) in to separate files?
- Do I need arrow functions for lazy loaded components?
- Convert typescript styles to CSS apart from conditional styling
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

# Demo
- Create independent demo for tooltips & modals
- Improve virtual scroll demo

# Packgages
	
## Components
- Modal
	- Stop wrapping child components as changes to these props may make the modal rerender
	- Make draggable?
- Overlay portal
	- Keep some functions and types around it
	- Check if resize event is causing app rerender?
- Tooltip
	- Stop wrapping child components as changes to these props may make the modal rerender
		- Backdrop
	- Tooltip arrow
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
- View divider
	- Try and prevent rerenders of children view 1 & view 2 elements
- Virtual scroll
	- Look at implementation to prevent rerenders for in viewport elements

## Router
- Only modify path name and maintain query params etc?
- Query parameters?
- Route parameters?
- Remove segment id from root
- Tidy up router package and comment everything

## Themed components
- Look at focused state for components
- Components
	- Buttons
		- Transition for FAB menu
	- Button group
		- Selection
			- Decouple base types used from buttons and implement own types to map to button
			- Don't allow button style for this group and choose thick if selected, default if not
	- Icons
		- Icon with count
	- Navigation bar
		- Add way to memo elements to maintain state when navigating back?
		- Add fallback horizontal scroll?
	- Navigation rail
		- Hover effect for burger menu?
		- Option to add FAB after menu icon. FAB has label when expanded, icon only if not
		- Option to add secondary items underneath primary items if expanded. Has heading
		- Optional divider
