# Generic
- Remove function calls to resolve components in all functional components
- Move components with multi functions (child components) in to separate files?
- Do I need arrow functions for lazy loaded components?
- Get rid of id fields and look to see where keys are actually needed
- Add parameter check to all hooks to stop rerun of useEffects if the parameters haven't changed
- Convert typescript styles to CSS apart from conditional styling
- Check for casts (" as ")
- Use Pascal case for enums or camel case?
- Make folder names consistent. When to use plural or not?
- Get rid of unused common interfaces?
- Move all interfaces in to commin interfaces folder?
- (Make events "onDismiss"?)
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
	
# Components
- Overlay portal
	- Keep some functions and types around it
	- Check if resize event is causing app rerender?
- Modal
	- Stop wrapping child components as changes to these props may make the modal rerender
	- Make draggable?
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

# Router
- Only modify path name and maintain query params etc?

# Themed components
- Look at focused state for components
- Components
	- Icons
		- Icon with count
	- Buttons
		- Transition for FAB menu
	- Button group
		- Selection
			- Decouple base types used from buttons and implement own types to map to button
			- Don't allow button style for this group and choose thick if selected, default if not
	- Navigation bar
		- Add way to memo elements to maintain state when navigating back?
		- Add fallback horizontal scroll?
	- Navigation rail
		- Hover effect for burger menu?
		- Option to add FAB after menu icon. FAB has label when expanded, icon only if not
		- Option to add secondary items underneath primary items if expanded. Has heading
		- Optional divider
