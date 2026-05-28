# Generic
- Sort out generics for contexts. Create wrapper for converting to correct type?
	- Virtual scroll items in view
	- Text field select menu on change
- "Run npm run knip"
- Context undefined instead of null? In case of optional contexts?
- Remove primitives from common interfaces? (number | string | RefCallback, | EventHandler) Look at react imports
- Remove function calls to resolve components in all functional components
- Move components with multi functions (child components) in to separate files?
- Do I need arrow functions for lazy loaded components?
	- Show if component?
- Look at transition / animation across project and see what other transition components can be implemented
- Look at arrow functions in components and change to use callback instead
- Extract all props in to their own types first or only for complex multi component ones?
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
	- Make sure we're not setting state if values are the same for primitive / complex types - use equality function
- Performance
	- Check usage of useEffect, useLayoutEffect, useCallback
		- Make everything use effect and see where layout or callback can be used etc
	- Use callback for style functions?
		- Convert functions with no parameters to constants and rename folder to styles instead of functions
		- Use hooks instead?
		- Convert typescript styles to CSS apart from conditional styling. Make use of use callback?
	- Get rid of inline functions for events etc and assign to a use callback hook variable
	- Check for unneeded uses of useState
	- Use ref instead of use state for parameters of custom "use" hooks (i.e. tooltip element)
	- Check for use state for setting ref to element and make use of ref callback instead? (See: view divider, tooltip, virtual scroll base)
	- Look at propgation and prevent default to see if they work
- Remove use of "{{" as this may be causing uneccessary state changes
- Look for use state without setting initial value with callback

# React Library

## Common

- CSS variable loader and convert all components to CSS / SASS files

## Components
- Modal
	- Make draggable?
- Tooltip
	- Tooltip jumps from top left to final position. Sort it
		- Come up with better solution for that
	- Make tooltip disappear if child element is not in viewport?
		- Intersection observer
		- Could just make disappear if there's any resize at all of overlay portal
		- Or just dismiss if any scrolling is done etc. Maybe use backdrop to prevent other interaction whilst tooltip is showing
	- Calculate best percentage of tooltip shown if none fit and show that one
	- Allow tooltip itself to be hovered over as a configurable flag of the tooltip props
	- Make use of CSS shape for tooltip arrow instead of providing a react element
- Transition
	- Look at https://easingwizard.com/ and make a map of all permutations of this?
	- Create contexts for all properties so that they can be shared across app? Can provide defaults across app then - TODO
		- Colour - TODO
		- Timing function - TODO
		- Duration - TODO
- Virtual scroll
	- Add scroll to index callback context - TODO
	- Add ability to snap to item after scroll? - TODO

## Material Icons

- Generate thick filled icons?
- Create map from filled to not filled & not filled to filled

## Router
- Only modify path name and maintain query params etc?
- Query parameters?
- Route parameters?
- Remove segment id from root
- Tidy up router package and comment everything (See route.type)

## Themed components
- Look at focused state for components
- Components
	- Date & time picker
		- Date picker
			- Implement
		- Time picker
			- Implement
	- Loading & Progress
		- Progress Indicator
			- Use transition / animation component
	- Navigation
		- Navigation bar
			- Fix hover state - TODO
			- Add fallback horizontal scroll?
		- Navigation rail
			- Fix hover state - TODO
			- Option to add FAB after menu icon. FAB has label when expanded, icon only if not
			- Option to add secondary items underneath primary items if expanded. Has heading
			- Optional divider
	- Sheets
		- Bottom sheet
			- Implement
	- All other components
		- App bars
			- Implement
		- Cards
			- Implement
		- Carousel
			- Implement
		- Checkbox
			- Integrate with form - TODO
			- What to do about disabled checkboxes in a group when handling parent checkbox?
		- Chips
			- Implement
		- Dialogs
			- Basic
				- Make supporting text optional to allow a content only modal - TODO
				- Add prop to wrap modal in a form? Add context for valid form flag as well as callback to set in parent? - TODO
			- Full
				- Add optional action button bar at the bottom - TODO
		- Lists
			- Implement
		- Menus
			- Add custom variant
		- Radio button
			- Integrate with form - TODO
		- Search
			- Modes
				- Docked (tooltip)
				- Full screen
					- Don't use optional divider between search bar and list
		- Sliders
			- Implement
		- Snackbar
			- Implement
		- Switch
			- Integrate with form - TODO
		- Text fields
			- Add copy text trailing click icon
			- Select - TODO
				- clear select - TODO
				- Sort out caret position when typing - TODO
			- Date - TODO
			- Time picker? - TODO
			- Icons & Images -  https://m3.material.io/components/text-fields/guidelines#5c8a5f07-b1a5-455f-bf76-7ff0d724f6b0
			- Integrate with form - TODO
			- Form
				- GUID id attribute to include label in form
				- Add form provider with callback to clear all form data / set to default
				- Add collective error state in form and provide hook so we can determine of state of form is valid
				- Add validity for all fields in form to prevent submision? Or add callback for is valid to each input and let consumer decide?
				- Fieldset & legend elements?
		- Toolbars
			- Implement

# Demo

## Themed components
- Create demos for shared components?
