# tailwind-plugin-grid-areas

A Tailwind CSS plugin to add some basic grid-area support.

## Installation

Install the plugin from npm:

```sh
npm install tailwind-plugin-grid-area
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
    theme: {
        // ...
    },
    plugins: [
        require('tailwind-plugin-grid-areas'),
        // ...
    ],
}
```

## Basic usage

| Class                           | Properties         |
| ------------------------------- | ------------------ |
| `area-1`                        | `grid-area: 1 / 1` |
| `area-a`, `area-b`, ... `area-z` | `grid-area: [a-z]` |

## Arbitrary values

See: https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values

```html
<div class="area-[foo]">
    <!-- ... -->
</div>
```

```html
<div class="area-[span_3_/_span_some-grid-area]">
    <!-- ... -->
</div>
```
