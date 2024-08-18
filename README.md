# react-interactive-dropdown

`react-interactive-dropdown` is a highly customizable and easy-to-use dropdown component for React that supports multiple features like multi-select, server-side search, pagination, custom styling, and more. It leverages the power of `react-window` for rendering large lists efficiently.

## Features

- Single select and multi-select options
- Customizable with icons, checkboxes, and end adornments
- Searchable with both client-side and server-side options
- Supports pagination with infinite scrolling using `IntersectionObserver`
- Handles component rendering for custom options
- Option to display selected items as chips
- Fully customizable styles and components

## Installation

Install the package via npm:

```bash
npm install react-interactive-dropdown
```

Usage
Here is a basic example of how to use the InteractiveDropdown component:

```jsx
import React, { useState } from "react";
import InteractiveDropdown from "react-interactive-dropdown";

const options = [
  { value: 1, label: "Option 1" },
  { value: 2, label: "Option 2" },
  { value: 3, label: "Option 3" },
];

function App() {
  const [selectedValue, setSelectedValue] = useState(null);
  const handleChange = (value) => {
    setSelectedValue(value);
  };
  return (
    <div>
      <InteractiveDropdown
        selectionList={options}
        placeholder="Select an option"
        value={selectedValue}
        onChange={handleChange}
        isSearchable={true}
        isMultiSelect={false}
        labelKeys={["label"]}
        valueKey="value"
      />
    </div>
  );
}
export default App;
```

## Props

| Prop Name             | Type       | Default     | Description                                             |
| --------------------- | ---------- | ----------- | ------------------------------------------------------- |
| `selectionList`       | `array`    | `[]`        | List of selection options.                              |
| `placeholder`         | `string`   | `undefined` | Placeholder text for dropdown.                          |
| `labelKeys`           | `array`    | `[]`        | Keys used for labeling options.                         |
| `valueKey`            | `string`   | `undefined` | Key for value of options.                               |
| `value`               | `any`      | `null`      | Selected value(s).                                      |
| `onChange`            | `function` | `(e) => {}` | Callback function for handling selection changes.       |
| `autoFormat`          | `boolean`  | `false`     | If true, automatically formats the labels.              |
| `name`                | `string`   | `undefined` | Dropdown name.                                          |
| `isRequired`          | `boolean`  | `false`     | If true, the dropdown is required.                      |
| `label`               | `string`   | `null`      | Label for the dropdown.                                 |
| `isSearchable`        | `boolean`  | `true`      | If true, enables search functionality.                  |
| `isMultiSelect`       | `boolean`  | `false`     | If true, enables multi-select.                          |
| `withCheckBox`        | `boolean`  | `false`     | If true, displays checkboxes for multi-select options.  |
| `withChips`           | `boolean`  | `false`     | If true, displays chips for selected items.             |
| `iconComponent`       | `function` | `null`      | Custom component for option icons.                      |
| `isDisabled`          | `boolean`  | `false`     | If true, disables the dropdown.                         |
| `endAdornment`        | `function` | `null`      | Additional adornment for the end of each option.        |
| `chipStyle`           | `object`   | `undefined` | Custom style for chips.                                 |
| `isServerSideSearch`  | `boolean`  | `false`     | If true, search queries are handled server-side.        |
| `onSearchQueryChange` | `function` | `(e) => {}` | Callback function for search query changes.             |
| `menuWidth`           | `string`   | `undefined` | Custom width for the dropdown menu.                     |
| `isComponentOptions`  | `boolean`  | `false`     | If true, options are rendered as components.            |
| `onLastRowIntersect`  | `function` | `() => {}`  | Callback function for when the last row is intersected. |
| `isPagination`        | `boolean`  | `false`     | If true, enables pagination.                            |

## Advanced Usage

`UI Virtualization`
The dropdown uses react-window to efficiently render large lists. This improves performance by only rendering items that are currently visible in the viewport.

`Server-Side Pagination`
The onLastRowIntersect prop allows you to handle server-side pagination. When the last row in the list becomes visible, this callback is triggered, enabling you to fetch and append more items.

```jsx
<InteractiveDropdown
  selectionList={options}
  placeholder="Select an option"
  value={selectedValue}
  onChange={handleChange}
  isSearchable={true}
  isMultiSelect={false}
  labelKeys={["label"]}
  valueKey="value"
  onLastRowIntersect={() => {
    // api call for next data
  }}
  isPagination={true}
/>
```

`Server-Side Option Search`
For handling search queries on the server side, use the isServerSideSearch prop. The onSearchQueryChange callback will be invoked whenever the search query changes, allowing you to fetch search results from your server.

```jsx
<InteractiveDropdown
  selectionList={options}
  placeholder="Select an option"
  value={selectedValue}
  onChange={handleChange}
  isSearchable={true}
  isMultiSelect={false}
  labelKeys={["label"]}
  valueKey="value"
  isServerSideSearch={(e) => {
    //here is your server-side searh logic
  }}
/>
```

`Custom Option Components`
You can pass a custom component for options using the isComponentOptions prop. This allows for highly customizable option rendering, as you can provide a component that will be rendered for each option in the dropdown.

```jsx
consy options = {
  {value:"ITEM_1", label:"Item 1", comp: {<img src={item1_img_src}/>}},
  ...
}
<InteractiveDropdown
  selectionList={options}
  placeholder="Select an option"
  value={selectedValue}
  onChange={handleChange}
  isSearchable={true}
  isMultiSelect={false}
  labelKeys={["label"]}
  valueKey="value"
  isComponentOptions={true}
/>

```

## Styling

The dropdown component uses the following CSS classes which you can override in your own stylesheet:

.inputfield-label: Styles for the label of the dropdown.
.chip: Styles for selected items when withChips is true.
.closeButton: Styles for the close button in chips.
.options-container: Styles for the dropdown menu container.
.menu-search-div: Styles for the search input container.
.menu-search-input: Styles for the search input.
.menu-list-div: Styles for the dropdown list container.
.menu-div: Styles for each option in the dropdown menu.
.styled-menu-div: Styles for the menu options.
.selected-styled-menu-div: Styles for selected menu options.
.no-option-div: Styles for the no options available message.

As this library is in its early stages, we highly encourage users to report any bugs or issues they encounter. We are continuously working around it to make the library more sustainable. Thank you for your feedback and support!

## License

This project is licensed under the ISC License
